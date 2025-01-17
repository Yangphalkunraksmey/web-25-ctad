import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Mainlayout from './Layouts/Mainlayout.jsx'
import Home from './pages/Home.jsx'
import People from './pages/People.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Register from './pages/Register.jsx'
import { Movie } from './pages/Movie.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
const router = createBrowserRouter
  (
    [{
      path: '/'
      ,
      element:
        <Mainlayout />
      ,
      children: [
        {
          path: "/"
          ,
          element:
            <Home />
        },
        {
          path: '/people'
          ,
          element: <People />
        },
      ],
      errorElement: <Error/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/about-us",
      element: <About/>
    },
    {
      path: "/contact-us",
      element: <Contact/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/movie",
      element: <Movie/>
    }



    ]
  )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

  </StrictMode>,
)
