import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './routes/root'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import About from './routes/about'
import Konote from './routes/__projects/konote'
import Recipie from './routes/__projects/recipie'
import Projects from './routes/projects'
import ProjectsIndex from './routes/__projects'

const crumb = (path: string) => {
  const splitPath = path.split('/')
  return (
    <>
      {path.startsWith('/') ? null : <span className="mr-2">/</span>}
      <Link to={path} className="link font-medium">
        {splitPath[splitPath.length - 1].toUpperCase()}
      </Link>
    </>
  )
}

const routerObjectArr = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'projects',
        element: <Projects />,
        handle: {
          crumb: crumb('/projects'),
        },
        children: [
          {
            element: <ProjectsIndex />,
            index: true,
          },
          {
            path: 'konote',
            element: <Konote />,
            handle: {
              crumb: crumb('konote'),
            },
          },
          {
            path: 'recipie',
            element: <Recipie />,
            handle: {
              crumb: crumb('recipie'),
            },
          },
        ],
      },
      {
        path: '/',
        element: <About />,
      },
    ],
  },
]

const router = createBrowserRouter(routerObjectArr)

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
)
