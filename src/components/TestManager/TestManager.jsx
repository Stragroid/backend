import { Box } from '@mui/material'
import React, { lazy, Suspense } from 'react'
const Table = lazy(() => import('./components/Table'));

export default function TestManager() {
    return (
        <>
            <Box>
                <Suspense fallback={<><h1>...Loading</h1></>} >
                    <Table />
                </Suspense>
            </Box>

        </>
    )
}
