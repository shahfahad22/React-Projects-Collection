import Home from './Components/Home/Home'
import Fruits from './Components/Fruits/Fruits'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dairy from './Components/Dairy/Dairy'
import Meet from './Components/Meet/Meet'
import AllProducsts from './Components/AllProducts/AllProducsts'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
      path: '/',
      element: <Home />
    },
    {
      path: '/fruits',
      element: <Fruits />
    },
    {
      path: '/dairy',
      element: <Dairy />
    },
    {
      path: '/meet',
      element: <Meet />
    },
    {
      path: '/allproducts',
      element: <AllProducsts />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ]
    },
    
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
  
}

export default App
