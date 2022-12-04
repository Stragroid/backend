import React, { useState } from 'react'
import { Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../../../assets/rightArrow.svg';


export default function SearchTest({ title, label, searchFor }) {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    return (
        <>
            <Box
                sx={{
                    marginTop: '20vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}
            >
                <h1
                    style={{
                        fontSize: '5rem',
                        strokeWidth: '10px',
                        textAlign: 'center',
                        color: 'purple'
                    }}
                >{title ? title : 'title goes here'}</h1>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '10px',
                        position: 'relative'
                    }}
                >
                    <label
                        htmlFor="testSearch"
                        style={{
                            fontSize: '1.4rem',
                            opacity: search === '' ? 0.5 : 0,
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 99
                        }}
                    >{label ? label : 'label goes here'}</label>
                    <input
                        id='testSearch'
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoComplete='off'
                        style={{
                            width: '450px',
                            height: '51px',
                            padding: '10px',
                            borderRadius: '10px',
                            fontSize: '1.4rem',
                            outline: 'none',
                            border: '2px solid black',
                        }}
                    />
                    <IconButton
                        aria-label="search-test"
                        sx={{ borderRadius: '10px', p: 0, overflow: 'hidden' }}
                        disabled={search === ''}
                        type="submit"
                        onClick={() => searchFor(search)}
                    >
                        <span
                            style={{
                                width: '51px',
                                height: '51px',
                                background: search === '' ? '#f07171' : '#4eb94e',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        ><RightArrow width='25px' height='25px' /></span>
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}
