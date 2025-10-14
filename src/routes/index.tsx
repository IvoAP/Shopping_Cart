import { Home } from "../pages/Home"
import { Store } from "../pages/Store"
import { About } from "../pages/About"

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Home"
  },
  {
    path: "/store",
    element: <Store />,
    title: "Store"
  },
  {
    path: "/about",
    element: <About />,
    title: "About"
  }
]
