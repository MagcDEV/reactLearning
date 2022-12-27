import { Button } from "@mui/material"
import { useCounter } from "../../hooks/useCounter"

export const CounterWithCustonHook = () => {

  const { counter, increment, decrement, reset} = useCounter();

  return (
    <>
    <h1 className="text-4xl p-5">Counter with Hook: {counter}</h1>
    <hr />
    <div className="ml-5 mt-5 flex gap-3">
        <Button onClick={increment} variant="contained">
            +1
        </Button>
        <Button onClick={reset} variant="contained">
            Reset
        </Button>
        <Button onClick={decrement} variant="contained">
            -1
        </Button>

    </div>
    </>
  )
}

export default CounterWithCustonHook