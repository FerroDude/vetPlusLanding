/** Message paths that are not visible on the page (accessibility, alerts, SEO, internal ids). */
const HIDDEN_EDITOR_PATHS = new Set([
  'header.logoAria',
  'header.navAria',
  'header.switchLang',
  'header.openMenu',
  'header.closeMenu',
  'cta.emailLabel',
  'cta.alert',
  'footer.navAria',
  'meta.title',
  'meta.description',
])

export function isEditorVisiblePath(path: string): boolean {
  if (HIDDEN_EDITOR_PATHS.has(path)) return false
  if (/^audiences\.cards\.\d+\.id$/.test(path)) return false
  return true
}

export function filterEditorVisiblePaths(paths: string[]): string[] {
  return paths.filter(isEditorVisiblePath)
}
