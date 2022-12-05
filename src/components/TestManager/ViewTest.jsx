import { Typography, Box, Button, ClickAwayListener } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { formatDateReadable, timeReadable } from '../generalApi';
import SearchTest from './components/SearchTest';

import { QuestionPaper } from '../../../questions'
import { viewTest } from '../../colorStyle';

export default function ViewTest() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [testId, setTestId] = useState(searchParams.get("test_id"));
    const [test, setTest] = useState(QuestionPaper)

    useEffect(() => {
        setTestId(searchParams.get("test_id"))
    }, [searchParams]);

    if (!testId) return (
        <SearchTest
            title="Search by Test Id"
            label="Enter Test Id"
            searchFor={(search) => {
                setSearchParams({ test_id: search })
            }}
        />
    );

    if (testId && !test) <div>...Loading</div>

    return (
        <>
            <TestInfo testDescription={test.testDescription} testId={testId} />
            <Box sx={{ p: '10px 30px 30px', display: 'flex', flexDirection: 'column', gap: '20px' }} >
                {test.Questions.map((question, index) => (
                    <Questions key={'Question' + index} question={question} totalQuestions={test.testDescription.totalQuestions} questionNumber={index + 1} />
                ))}
            </Box>
        </>
    );
};



function TestInfo({ testDescription, testId }) {
    const tileDetails = [
        { label: 'Title', value: testDescription.title, styleProps: { gridColumn: '1 / span 4' } },
        { label: 'Test Id', value: testId },
        { label: 'Branch', value: testDescription.branch },
        { label: 'Status', value: testDescription.active ? 'Active' : 'Inactive' },
        { label: 'Created On', value: formatDateReadable(testDescription.createdOn) },
        { label: 'Total Questions', value: testDescription.totalQuestions },
        { label: 'Time', value: timeReadable({ time: testDescription.time, format: 'seconds' }) },
        { label: 'Start Date', value: formatDateReadable(testDescription.startDate) },
        { label: 'End Date', value: formatDateReadable(testDescription.endDate) },
        { label: 'Maximum Marks', value: testDescription.maxMarks },
        { label: 'High Score', value: testDescription.highScore },
        { label: 'Average Score', value: testDescription.averageScore.toFixed(4) },
        { label: 'Total Test Taken', value: testDescription.totalTestTaken },
    ]

    return (
        <>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gap: '10px',
                    p: '20px'
                }}
            >
                {tileDetails.map((tile, index) => (
                    <Box
                        key={'tile' + index}
                        sx={{
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'center',
                            padding: '15px 20px',
                            borderRadius: '10px',
                            background: viewTest.tile.background,
                            color: viewTest.tile.color,
                            whiteSpace: 'nowrap',
                            justifyContent: 'center',
                            ...tile.styleProps,
                        }}
                    >
                        <Typography >{tile.label}:</Typography>
                        <Typography >{tile.value}</Typography>
                    </Box>
                ))}
            </Box>
        </>
    )
}

function Questions({ question, totalQuestions, questionNumber }) {
    const [collapseOpen, setCollapseOpen] = useState(false);
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return (
        <>
            <Box sx={{ padding: '20px', border: '2px solid black', borderRadius: '20px' }} >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Typography variant="h5"
                        noWrap
                        sx={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            letterSpacing: '.1rem',
                            color: '#424242',
                            textDecoration: 'none'
                        }}
                    >{"Question " + questionNumber + " of " + totalQuestions}</Typography>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <Typography
                            sx={{
                                background: question.marks > 0 ? '#86ea86' : 'none',
                                border: question.marks > 0 ? 'none' : '2px solid #4F53FF',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                whiteSpace: 'nowrap',
                            }}
                        >Marks: {question.marks}</Typography>
                        <Typography
                            sx={{
                                background: question.negativeMarks < 0 ? '#f07171' : 'none',
                                border: question.negativeMarks < 0 ? 'none' : '2px solid #4F53FF',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                whiteSpace: 'nowrap'
                            }}
                        >Negative Marks: {question.negativeMarks}</Typography>
                    </Box>
                    <Typography variant="h5"
                        noWrap
                        sx={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            letterSpacing: '.1rem',
                            color: '#424242',
                            textDecoration: 'none',
                        }}
                    >{question.questionType}</Typography>
                </Box>

                <Typography
                    sx={{
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        letterSpacing: '.08rem',
                        mt: '10px'
                    }}
                    dangerouslySetInnerHTML={{ __html: question.question }}
                ></Typography>

                {question.questionType !== "NAT" && (
                    <Box sx={{ display: 'grid', gap: '10px', mt: '20px' }}>
                        {question.options.map((option, index) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    borderRadius: '10px',
                                    border: question.answer.includes(option.value) ? '2px solid #4eb94e' : '2px solid #CFD0FF',
                                    alignItems: 'center',
                                    background: question.answer.includes(option.value) ? '#86ea86' : '#E4E5FF',
                                    padding: '10px'
                                }}
                                key={"question" + questionNumber + "option" + (index + 1)}
                            >
                                <Typography sx={{ padding: '5px', fontWeight: '600', fontSize: '1.2rem' }}>{alphabets[option.value - 1]}.</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        letterSpacing: '.08rem',
                                    }}
                                    dangerouslySetInnerHTML={{ __html: option.text }}
                                ></Typography>
                            </Box>
                        ))}
                    </Box>
                )}
                {question.questionType === "NAT" && (
                    <Box
                        sx={{
                            display: 'flex',
                            borderRadius: '10px',
                            border: '2px solid #4eb94e',
                            justifyContent: 'center',
                            background: '#86ea86',
                            padding: '10px',
                            mt: '20px'
                        }}
                    >
                        <Typography sx={{ fontSize: '1.1rem', fontWeight: 500, letterSpacing: '.08rem', }}
                        >{question.answer[0] + ' < _____ < ' + question.answer[1]}</Typography>
                    </Box>
                )}

                <Box
                    sx={{
                        mt: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <ClickAwayListener onClickAway={() => setCollapseOpen(false)} >
                        <Box
                            sx={{
                                padding: '10px',
                                borderRadius: '15px',
                                border: '2px solid #4eb94e',
                                width: collapseOpen ? '100%' : '144px',
                                transition: 'all 0.5s ease'
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    whiteSpace: 'nowrap',
                                    width: '120px',
                                    background: '#86ea86',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    textTransform: 'unset',
                                    color: 'black',
                                    '&:hover': {
                                        background: '#4eb94e'
                                    }
                                }}
                                onClick={() => setCollapseOpen(collapseOpen ? false : true)}
                            >{collapseOpen ? 'Hide Solution' : 'Show Solution'}</Button>
                            {collapseOpen && (
                                <Typography
                                    sx={{
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        letterSpacing: '.08rem',
                                        mt: '10px'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: question.answerExplanation }}
                                ></Typography>
                            )}
                        </Box>
                    </ClickAwayListener>
                </Box>
            </Box>
        </>
    )
}