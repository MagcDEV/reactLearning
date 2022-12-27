import { useCallback, useState } from "react"
import ShowIncrement from "./ShowIncrement"

const CallBacksHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback(
    () => {
      setCounter((value) => value + 1 )
    },
    [],
  )

  return (
    <div>
      <h1 className='text-4xl p-5'>Counter: {counter}</h1>   
      <hr />
    <ShowIncrement increment={incrementFather} />
    </div>
  )
}

export default CallBacksHook
