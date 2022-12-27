import { Button } from "@mui/material"
import { useState } from "react";
import { useCounter } from "../../hooks/useCounter"
import Small from "./Small";

const Memorize = () => {
  const {counter, increment} = useCounter(1);
  const [show, setShow] = useState(true)

  return (
    <>
      <h1 className='text-4xl p-5'>Counter: <Small value={counter} /></h1>   
      <hr />
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

export default Memorize
