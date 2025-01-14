import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './redux-state/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },{
    path:'/dashboard',
    element:<App />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
