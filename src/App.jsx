import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BillingPage } from './Components/BillingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <BillingPage />
      </div>
  )
}

export default App
