import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'
// import { Button } from './components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Button variant="contained">Primary Button</Button>
     <Button>Default Button</Button>
      <Button variant="doated">Dashed Button</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="outlined" href="#outlined-buttons">Link Button</Button>
    </div>
  )
}

export default App
