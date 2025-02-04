import App from "./App"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Rentone from "./pages/rentone/Rentone"
import Rentthree from "./pages/rentthree/Rentthree"
import Renttwo from "./pages/renttwo/Renttwo"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/Imovel001",
    element: <Rentone />
  },

  {
    path: "/Imovel002",
    element: <Renttwo />
  },

  {
    path: "/Imovel003",
    element: <Rentthree />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
