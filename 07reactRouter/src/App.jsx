import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-black px-3 py-3 rounded-full flex justify-center text-white'>React Router</h1>
    </>
  )
}

export default App
