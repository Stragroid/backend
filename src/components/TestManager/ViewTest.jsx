import React from 'react';
import SearchTest from './components/SearchTest';

export default function ViewTest() {
    return (
        <>
            <SearchTest title="Search by Test Id" label="Enter Test Id" searchParams="test_id" />
        </>
    )
};
