import { Home } from "../pages/Home"
import { Store } from "../pages/Store"
import { About } from "../pages/About"
import { PATHS } from "./paths"

export const routes = [
  {
    path: PATHS.HOME,
    element: <Home />,
    title: "Home"
  },
  {
    path: PATHS.STORE,
    element: <Store />,
    title: "Store"
  },
  {
    path: PATHS.ABOUT,
    element: <About />,
    title: "About"
  }
]
