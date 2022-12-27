import { Button, CircularProgress } from '@mui/material';
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import Quote from './Quote';

const Layout = () => {
  const {counter, increment} = useCounter()
  const { data, isLoading } = 
    useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);


  return (
    <>
    <h1 className='text-4xl p-5'>Breaking Bad Quotes</h1>
    <hr />
    {
      isLoading ? <CircularProgress className='m-10' />
      :
      <Quote author={data[0].author} quote={data[0].quote} />
      
    }
      <div className='m-5'>
        <Button 
          onClick={increment}
          disabled={isLoading}
          variant='contained'>
          Next Quote
        </Button>
      </div>
    </>
  )
}

export default Layout
