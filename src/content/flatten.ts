import type { Locale, Messages } from '../i18n/types'

export type FlatOverrides = Record<string, string>
export type ContentOverrides = Partial<Record<Locale, FlatOverrides>>

export function flattenMessages(obj: unknown, prefix = ''): FlatOverrides {
  const result: FlatOverrides = {}

  if (typeof obj === 'string') {
    if (prefix) result[prefix] = obj
    return result
  }

  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      Object.assign(result, flattenMessages(item, `${prefix}.${index}`))
    })
    return result
  }

  if (obj && typeof obj === 'object') {
    for (const [key, value] of Object.entries(obj)) {
      const path = prefix ? `${prefix}.${key}` : key
      Object.assign(result, flattenMessages(value, path))
    }
  }

  return result
}

function setByPath(obj: unknown, path: string, value: string): unknown {
  const parts = path.split('.')
  const clone = structuredClone(obj) as Record<string, unknown>
  let current: Record<string, unknown> | unknown[] = clone

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i]
    const nextPart = parts[i + 1]
    const isNextIndex = /^\d+$/.test(nextPart)

    if (Array.isArray(current)) {
      const index = Number(part)
      if (!current[index] || typeof current[index] !== 'object') {
        current[index] = isNextIndex ? [] : {}
      }
      current = current[index] as Record<string, unknown> | unknown[]
      continue
    }

    const record = current as Record<string, unknown>
    if (!record[part] || typeof record[part] !== 'object') {
      record[part] = isNextIndex ? [] : {}
    }
    current = record[part] as Record<string, unknown> | unknown[]
  }

  const last = parts[parts.length - 1]
  if (Array.isArray(current)) {
    current[Number(last)] = value
  } else {
    ;(current as Record<string, unknown>)[last] = value
  }

  return clone
}

export function applyFlatOverrides(base: Messages, overrides: FlatOverrides): Messages {
  let result: Messages = base
  for (const [path, value] of Object.entries(overrides)) {
    result = setByPath(result, path, value) as Messages
  }
  return result
}

export function mergeLocaleOverrides(
  base: Messages,
  fileOverrides: ContentOverrides,
  localOverrides: ContentOverrides,
  locale: Locale,
): Messages {
  let result = base
  const fromFile = fileOverrides[locale]
  const fromLocal = localOverrides[locale]

  if (fromFile) result = applyFlatOverrides(result, fromFile)
  if (fromLocal) result = applyFlatOverrides(result, fromLocal)

  return result
}

export function mergeContentOverrides(
  fileOverrides: ContentOverrides,
  localOverrides: ContentOverrides,
): ContentOverrides {
  const locales = new Set([
    ...Object.keys(fileOverrides),
    ...Object.keys(localOverrides),
  ]) as Set<Locale>

  const merged: ContentOverrides = {}
  for (const locale of locales) {
    merged[locale] = {
      ...(fileOverrides[locale] ?? {}),
      ...(localOverrides[locale] ?? {}),
    }
  }
  return merged
}
