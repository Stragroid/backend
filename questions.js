export const QuestionPaper = {
    "_id": {
        "$oid": "63726e28815c5d76b18d205f"
    },
    "testId": 90887990,
    "testDescription": {
        "title": "Computer",
        "branch": "Computer",
        "totalQuestions": 4,
        "maxMarks": 20,
        "time": 5246,
        "averageScore": 8.743119266055047,
        "highScore": 20,
        "totalTestTaken": 109,
        "createdOn": "2022-10-15T17:30",
        "endDate": "2023-01-15T17:30",
        "startDate": "2022-12-15T17:30",
        "active": true,
        "testId": 90887990
    },
    "Questions": [
        {
            "questionType": "MCQ",
            "question": "<p> Consider the following properties of RISC and CISC architectures. </p>",
            "options": [
                {
                    "value": 1,
                    "text": "<p> RISC architecture supports variable length instructions. </p>"
                },
                {
                    "value": 2,
                    "text": "<p> RISC control units are typically hardwired units. </p>"
                },
                {
                    "value": 3,
                    "text": "<p> RISC architecture supports a greater number of registers than CISC architecture. </p>"
                },
                {
                    "value": 4,
                    "text": "<p> RISC architecture supports Register to Register arithmetic operations only. </p>"
                }
            ],
            "answer": [
                1
            ],
            "answerExplanation": "<p><strong>Ans (A)</strong></p><p>The given DFA accepts {&isin;}.</p><p>In option (1), language is accepting all strings over &sum; = {a, b}</p><p>In option (2) from &sum;, we are eliminating all the strings of length greater than equal to one i.e., &sum;* (a, b, aa, ab, ba,&nbsp; bb, ...) = {&isin;}</p><p>In option (3) from universal language we are eliminating all strings of length greater than equal to zero i.e., &sum; (a, b, aa, ab, ba, bb, .........} = &Phi;</p>",
            marks: 5,
            negativeMarks: -2
        },
        {
            "questionType": "MSQ",
            "question": "<p> During Instruction Fetch different CPU registers are used. Based on the time of their usage, we are given some sequences. Which one among the following sequence is the most appropriate? </p>",
            "options": [
                {
                    "value": 1,
                    "text": "<p> PC → MAR → Memory → MDR → IR </p>"
                },
                {
                    "value": 2,
                    "text": "<p> PC → Memory → MAR → IR </p>"
                },
                {
                    "value": 3,
                    "text": "<p> PC → Memory → MDR → IR </p>"
                },
                {
                    "value": 4,
                    "text": "<p> PC → MAR → Memory → MAR → IR </p>"
                }
            ],
            "answer": [
                2,
                4
            ],
            "answerExplanation": "<p><strong>Ans (A)</strong></p><p>DFA which accepts all strings that include aa as a substring and do not include bab</p><p>&hellip;</p><p>Number of final states in minimal DFA = 3</p><p>Number of Non-final states in minimal DFA = 5</p><p>Absolute difference between Number of final state and Number of Non-final states = |3 -5| =2</p>",
            marks: 5,
            negativeMarks: -2
        },
        {
            "questionType": "NAT",
            "question": "<p> Following are the properties of the Harvard Architecture systems. </p>",
            "answer": [
                10, 50
            ],
            "answerExplanation": "<p><strong>Correct Answer: 50.50</strong></p><p>Ans (C, D)</p><ol><li>Correct, if a Finite Automata does not have any final state then the language accepted by it is empty language</li><li>Correct, Each FA will only have a unique initial state.</li><li>Incorrect</li><li>Incorrect</li></ol><p>In Finite Automata A = (Q, &sum;, &delta;, q<sub>0</sub>, F), where Q = finite non-empty set of states.</p><p>So, set of states is never going to be empty.</p>",
            marks: 5,
            negativeMarks: -5
        },
        {
            "questionType": "MCQ",
            "question": "<p> Consider the CPU generating 120 memory references. There are 40 miss operations that occurred in level-1 cache and 10 miss operations occurred in level-2 cache. What is the global and local miss rate respectively at level-2? </p>",
            "options": [
                {
                    "value": 1,
                    "text": "<p> 0.25, 0.25 </p>"
                },
                {
                    "value": 2,
                    "text": "<p> 0.025, 0.0833 </p>"
                },
                {
                    "value": 3,
                    "text": "<p> 0.0833, 0.25 </p>"
                },
                {
                    "value": 4,
                    "text": "<p> 0.25, 0.0833 </p>"
                }
            ],
            "answer": [
                4
            ],
            "answerExplanation": "<p><strong>Ans (D)</strong></p><p>For a string of length n, DFA will have minimum n+2 states and NFA will have n+1 state.</p><p>Here, n=2022</p><p>Therefore, DFA will have minimum 2022+2=2024 states.</p><p>NFA will have minimum 2022+1=2023 states.</p><p>Minimal DFA which accepts set of all strings of length s 2022 i.e.,</p><p>|w| &le; 2022 over &sum; = {a, b}</p><p>&hellip;</p><p>We can solve this problem for small value.</p><p>For string of length n, DFA will have minimum n+2 states and NFA will have n+1 states.</p><p>Here, n=2022</p><p>Therefore, DFA will have minimum 2022+2=2024 states</p><p>NFA will have minimum 2022+1=2023 states.</p><p>Minimal NFA which accepts all strings of length &le; 2022 i.e. |w| &le; 2022 contains 2023</p><p>&hellip;</p><p>So, Difference between their number of states in minimal DFA and minimal NFA, which accept all strings of length &le; 2022 over the alphabet &sum; = {a, b) is</p><p>= 2024 &ndash; 2023</p><p>= 1</p>",
            marks: 5,
            negativeMarks: -5
        }
    ],
    "instructions": {
        "boxInstructions": [
            {
                "instructionTitle": "Main Instructions",
                "content": "<p>Main</p>"
            },
            {
                "instructionTitle": "Secondary Instructions",
                "content": "<p>Secondary</p>"
            }
        ],
        "checkboxInstructions": "<p>I have read and understood all the instructions.</p>"
    },
    "rankArray": []
}