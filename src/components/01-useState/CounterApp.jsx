import { Button } from "@mui/material";
import { useState } from "react";

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2, counter3} = counter;

    return ( 
        <div className="container h-full w-full">
            <h1 className="text-4xl p-5">Counter App: {counter1}</h1>
            <h1 className="text-4xl p-5">Counter App: {counter2}</h1>
            <h1 className="text-4xl p-5">Counter App: {counter3}</h1>
            <hr />
            <div className="ml-5 mt-5">
                <Button variant="contained" onClick={() => setCounter({...counter, counter1: counter1 + 1 }) }>
                    +1
                </Button>
            </div>
        </div>
     );
}


export default CounterApp;
