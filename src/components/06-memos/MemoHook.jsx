import { Button } from "@mui/material"
import { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter"
import Small from "./Small";


const heavyStuff = (interationNumber = 100) => { 
  for (let index = 0; index < interationNumber; index++) {
    console.log("Ahi vamos puta")
  }
  return `${interationNumber} interaciones realizadas`;
}


const MemoHook = () => {
  const {counter, increment} = useCounter(1);
  const [show, setShow] = useState(true)
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1 className='text-4xl p-5'>Counter: <Small value={counter} /></h1>   
      <hr />
      <h4 className='text-3xl p-5'>{memorizedValue}</h4>
      <div className='m-5'>
        <Button 
          onClick={increment}
          variant='contained'>
          +1 
        </Button>
      </div>
      <div className='m-5'>
        <Button 
          onClick={() => { setShow(!show) }}
          variant='contained'>
          Show/Hide {JSON.stringify(show)}

        </Button>
      </div>
    </>
  )
}

export default MemoHook
