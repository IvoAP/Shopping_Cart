// Centralizando todos os caminhos da aplicação
export const PATHS = {
  HOME: "/",
  STORE: "/store",
  ABOUT: "/about",
} as const

// Type para garantir type-safety
export type PathKeys = keyof typeof PATHS
