import { Button } from "@mui/material"
import { useRef } from "react"

const FocusScreen = () => {
  const inputRef = useRef();

  const setFocus = () => { 
    inputRef.current.select();
   }

  return (
    <>
      <h1 className='m-5 text-4xl'>Focus Screen</h1>
      <hr />
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Ingrese su nombre"
        className="m-5 border"
      />
        <Button 
        variant='contained'
        onClick={setFocus}
        >Set Focus</Button>
    </>
  )
}

export default FocusScreen
