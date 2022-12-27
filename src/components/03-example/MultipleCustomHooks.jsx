import { Button, CircularProgress } from '@mui/material';
import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter()
  const { data, isLoading, hasError} = 
    useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

  return (
    <>
    <h1 className='text-4xl p-5'>Breaking Bad Quotes</h1>
    <hr />
    {
      isLoading ? <CircularProgress className='m-10' />
      :
      <div>
        <blockquote className='m-5 text-lg'>
          {data[0].quote}
        </blockquote>
        <h3 className='m-5 text-xl'>-{data[0].author}</h3>
      </div>
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
