import { Button } from '@mui/material';
import React, { memo } from 'react'

export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (

        <Button
            variant="contained"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </Button>
    )
})
