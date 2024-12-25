import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navbar">
      <h1>Railway Loco Management</h1>
    </div>
     <div className="main">
        <div className="admin-login">
            <Button>Admin Login</Button>
        </div>
        <div className="user-login">
            <Button>User Login</Button>
        </div>
     </div>
    </>
      )
}

export default App
