import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes';
import './index.css'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import { RouterProvider} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';
  
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <div className="w-[1300px] mx-auto">
     <RouterProvider router={router} />
     </div>
      </QueryClientProvider>
     </AuthProvider>
     
  </React.StrictMode>,
)
