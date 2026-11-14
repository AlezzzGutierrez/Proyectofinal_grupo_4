
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import { AuthorizationProvider } from './contexts/AuthorizationContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthorizationProvider>
      <RouterProvider router={router} />
    </AuthorizationProvider>
  </StrictMode>,
)