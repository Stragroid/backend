import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import SearchTest from './components/SearchTest';

export default function Result() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [testId, setTestId] = useState(searchParams.get("test_id"));
    console.log(testId);
    useEffect(() => {
        setTestId(searchParams.get("test_id"))
    }, [searchParams]);

    if (!testId) return (
        <SearchTest title="Search by Test Id" label="Enter Test Id" searchFor={(search) => setSearchParams({ test_id: search })} />
    );

    return (
        <>
            <h1>{testId}</h1>
        </>
    );
};


