import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'

const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm,  username, email, password } = useForm({
        username: "",
        email: "",
        password: ""
    });

    // const {username, email, password} = formState;
    
    return (
        <>
        <h1 className='text-4xl p-5'>Formulario Simple con Custom Hooks</h1>
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

        <input 
            type="text"
            className='m-5 border'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onInputChange}
        />

        <Button 
        variant='contained'
        onClick={onResetForm}
        >Reset</Button>
        
        </>
    )
}

export default FormWithCustomHook