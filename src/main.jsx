import { StrictMode, Children } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import ErrorPage from './pages/ErrorPage.jsx'
import SegundaPagina from './pages/SegundaPagina.jsx'
import Home from './pages/Home.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path:"/segundaPagina",
        element: <SegundaPagina />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
