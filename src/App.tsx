import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Leaderboard from './pages/Leaderboard';
import Manage from './pages/Manage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Leaderboard />
  },
  {
    path: '/manage',
    element: <Manage />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
