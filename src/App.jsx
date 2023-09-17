import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DetailPage } from './DetailPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DetailPage />
    </>
  )
}

export default App
