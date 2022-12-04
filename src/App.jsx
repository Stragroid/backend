import React from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'

import Home from './components/Home'
import Navbar, { SubNavbar } from './components/Navbar'
import ViewTest from './components/TestManager/ViewTest'
import Result from './components/TestManager/Result'
import TestManager from './components/TestManager/TestManager'
import EditTest from './components/TestManager/EditTest'

function App() {
  const TestManagerSubNavLinks = [
    {
      path: '/test-manager',
      label: 'Test',
      end: true
    },
    {
      path: 'result',
      label: 'Result'
    },
    {
      path: 'viewTest',
      label: 'View Test'
    },
    {
      path: 'editTest',
      label: 'Edit Test'
    },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="test-manager" element={<SubNavbar subNavLinks={TestManagerSubNavLinks} />} >
            <Route index element={<TestManager />} />
            <Route path="result" element={<Result />} />
            <Route path="viewTest" element={<ViewTest />} />
            <Route path="editTest" element={<EditTest />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
