import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Experienced from './Components/Experienced/Experienced.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Education from './Components/Education/Education.jsx';
import Error from './Components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/aboutme",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/experience",
        element: <Experienced></Experienced>
      },
      {
        path: "/skill",
        element:<Skills></Skills>
      },
      {
        path: "/education",
        element:<Education></Education>
      }
    ],
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
