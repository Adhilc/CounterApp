import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <h3>{count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrement
        </button>
      </div>
    </>
  )
}

export default App
