import { useState } from 'react'
import { JuegoProvider } from './contexts/JuegoContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    //envuelvo los componentes que necesitan acceder a los datos del contexto con el provider
    <JuegoProvider>
      //el outlet es el lugar donde se renderizan los componentes hijos de la ruta
      <Outlet />
    </JuegoProvider>
  )
}

export default App
