import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { About, Github, Home, User } from './components/index.js'
import Layout from './Layout.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='tutorial-react-router' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />} />
      </Route>
      <Route
        path='github/'
        element={<Github />}
        loader={githubInfoLoader}
      />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
