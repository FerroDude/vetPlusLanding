import { OVERRIDES_STORAGE_KEY } from '../config/edit'
import type { ContentOverrides } from './flatten'

export function loadLocalOverrides(): ContentOverrides {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(OVERRIDES_STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as ContentOverrides
  } catch {
    return {}
  }
}

export function saveLocalOverrides(overrides: ContentOverrides): void {
  localStorage.setItem(OVERRIDES_STORAGE_KEY, JSON.stringify(overrides))
}

export function clearLocalOverrides(): void {
  localStorage.removeItem(OVERRIDES_STORAGE_KEY)
}

export async function loadDeployedOverrides(): Promise<ContentOverrides> {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}content-overrides.json`, {
      cache: 'no-store',
    })
    if (!response.ok) return {}
    const data = (await response.json()) as ContentOverrides
    return data ?? {}
  } catch {
    return {}
  }
}
