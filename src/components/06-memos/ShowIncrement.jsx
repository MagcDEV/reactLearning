import { Button } from "@mui/material"
import { memo } from "react"
const ShowIncrement = memo(({increment}) => {
  console.log("Me volvi a generar :(")
  return (
    <div className="m-5">
        <Button 
          onClick={() => {increment()}}
          variant='contained'>
          Incrementar
        </Button>
      
    </div>
  )
})

export default ShowIncrement
