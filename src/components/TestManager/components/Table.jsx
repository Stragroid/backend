import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Box, Button, Menu, MenuItem } from '@mui/material';

import {
    DataGrid,
    GridToolbar,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';

import testPapers from '../../../../testPapers';
import { Link } from 'react-router-dom';

const GridColumnsTestPapers = [
    {
        field: 'id',
        headerName: 'S.No.',
        filterable: false,
        hideable: false,
        sortable: false,
        width: 70,
        headerAlign: 'center',
        align: 'center',
        renderCell: (index) => index.api.getRowIndex(index.row._id.$oid) + 1
    },
    { field: '_id', headerName: 'Test ID', width: 250, hide: true, renderCell: params => params.row._id.$oid },
    { field: 'title', headerName: 'Test Name', flex: 1 },
    { field: 'startDate', headerName: 'Start Date', width: 200, renderCell: params => dayjs(params.row.startDate).format('MMM D, YYYY h:mm A') },
    { field: 'endDate', headerName: 'End Date', width: 200, renderCell: params => dayjs(params.row.endDate).format('MMM D, YYYY h:mm A') },
    {
        field: 'status',
        headerName: 'Status',
        width: 140,
        type: 'boolean',
        renderCell: params => params.row.status ? 'Active' : 'Inactive'
    },
    { field: 'totalQuestions', headerName: 'Total Questions', width: 130 },
    { field: 'branch', headerName: 'Branch', width: 150 },
    { field: 'actions', headerName: 'Actions', sortable: false, width: 100, type: 'actions', renderCell: params => <UserActions rowData={params.row} /> }
]

export default function Table() {
    const [pageSize, setPageSize] = useState(5);
    return (
        <>
            <div style={{ width: '100%', height: 'auto', padding: '10px 20px' }}>
                <DataGrid
                    rows={testPapers}
                    columns={GridColumnsTestPapers}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    autoHeight={true}
                    components={{
                        Toolbar: GridToolbar
                    }}
                    getRowId={(row) => row._id.$oid}
                />
            </div>
        </>
    )
};

function UserActions({ rowData }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box
                sx={{
                    m: 1,
                    display: 'flex',
                    gap: '10px'
                }}
            >
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    disableRipple
                    onClick={handleClick}
                >ooo</Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem
                        component={Link}
                        to={{
                            pathname: "viewTest",
                            search: `?test_id=${rowData._id.$oid}`
                        }}
                        onClick={
                            handleClose
                        }
                    >View Test</MenuItem>
                    <MenuItem
                        component={Link}
                        to={{
                            pathname: "result",
                            search: `?test_id=${rowData._id.$oid}`
                        }}
                        onClick={
                            handleClose
                        }
                    >Result</MenuItem>
                    <MenuItem
                        component={Link}
                        to={{
                            pathname: "editTest",
                            search: `?test_id=${rowData._id.$oid}`
                        }}
                        onClick={
                            handleClose
                        }
                    >Edit Test</MenuItem>
                    <MenuItem
                        onClick={handleClose}
                    >Delete Test</MenuItem>
                </Menu>
            </Box>
        </>
    )
};
