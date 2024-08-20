export const logoOverrides = {
  'antfu/vscode-array-index-inlay': 'https://github.com/antfu/vscode-array-index-inlay/raw/main/res/icon.png?raw=true',
  'antfu/vscode-smart-clicks': 'https://raw.githubusercontent.com/antfu/vscode-smart-clicks/main/res/icon.png',
} as Record<string, string>

// @unocss-include
export const subLogosMatch = [
  [/^nuxt-/, 'i-logos-nuxt-icon'],
  [/^vite-/, 'i-logos-vitejs'],
  [/^eslint-/, 'i-logos-eslint'],
  [/^vscode-/, 'i-logos-visual-studio-code'],
] as const