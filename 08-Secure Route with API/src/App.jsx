import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from "./Components/ProtectedRoute"
import { Navigate } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Properties from './pages/Properties'

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute> <Home /></ProtectedRoute>}/>
      <Route path='/properties' element={<ProtectedRoute><Properties /></ProtectedRoute>} />
      <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path='/contact' element={<ProtectedRoute> <Contact /> </ProtectedRoute>}/> 
      <Route path='/login' element={<Login />} /> 
      <Route path='*' element={<Navigate to="/"/>}/>
     </Routes>
  )
}

export default App