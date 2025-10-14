import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Navbar } from "./components/Navbar"
import { routes } from "./routes"

function App() {

  return (
   <Container className="my-4">
      <Navbar/>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
   </Container>
  )
}

export default App
