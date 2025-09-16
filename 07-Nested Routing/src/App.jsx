import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"

function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/users" element={<Users />}>
      <Route  path=":id" element={<UserDetails />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App