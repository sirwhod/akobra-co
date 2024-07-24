import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { Error } from './pages/error'
import { DefaultLayout } from './pages/_layouts/default_layout'
import { Home } from './pages/app/home'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    id: 'home',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        errorElement: <Error />,
        element: <Home />,
      }
    ],
  },
  {
    path: '/*',
    errorElement: <Error />,
    element: <NotFound />,
  },
])