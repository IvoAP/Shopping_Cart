
export const PATHS = {
  HOME: "/",
  STORE: "/store",
  ABOUT: "/about",
} as const

export type PathKeys = keyof typeof PATHS
