import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    //const incrementar = ( num ) => {
      //setValor( valor + num )
    //}

    const incrementar = useCallback(
      (value) => {
        setValor((c) => c + value)
      },
      [],
    )

    return (
        <div className="m-5 text-lg">
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />
            <div className="m-5 flex gap-4">
              {
                  numeros.map( n => (
                      <Hijo 
                          key={ n }
                          numero={ n }
                          incrementar={ incrementar }
                      />
                  ))
              }
            </div>

            {/* <Hijo /> */}
        </div>
    )
}
