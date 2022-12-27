import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const Messange = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        const onMouseMove = ({x, y}) => {
            setCoords({x, y})
        }
        console.log("corrio")
        window.addEventListener('mousemove', onMouseMove);
    return () => {
        window.removeEventListener('mousemove', onMouseMove);
    }
    }, [])

    return (
        <>
        <h3 className='text-2xl m-5'>Usurio ya existe</h3>
        {JSON.stringify(coords)}
        </>
    )
}

export default Messange