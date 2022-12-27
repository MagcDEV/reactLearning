import React, { useEffect, useState } from 'react'
import Messange from './Messange'

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "Strider",
        email: "manuel117g@gmail.com"
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target; 
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        // console.log("Solo se ejecuta una vez")
    }, [])

    useEffect(() => {
        // console.log("la forma cambio")
    }, [formState])

    useEffect(() => {
        // console.log("el email cambio")
    }, [email])
    
    
  return (
    <>
    <h1 className='text-4xl p-5'>Formulario Simple</h1>
    <hr />

    <input 
        type="text"
        className='m-5 border'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
     />

    <input 
        type="text"
        className='m-5 border'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onInputChange}
     />
     {
        (username === 'Strider2') && <Messange />
     }
     
    </>
  )
}

export default SimpleForm
