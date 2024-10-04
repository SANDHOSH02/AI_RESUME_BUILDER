import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInpage from './auth/sign-in/index.jsx'
import Home from './home/index.jsx'


const router=createBrowserRouter([  
  {
    
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ] 

  },
  { 
    path:'/auth/sign-in ',
    element:<SignInpage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router ={router}/>
      </React.StrictMode>,
)
