import { useState } from 'react'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1b2021] h-[100vh]'>
      <Navbar/>
    </div>
  )
}

export default App
