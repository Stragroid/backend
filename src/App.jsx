import React from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'

import Home from './components/Home'
import Navbar, { SubNavbar } from './components/Navbar'
import Result from './components/TestManager/Result'
import TestManager from './components/TestManager/TestManager'

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
    }
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="test-manager" element={<SubNavbar subNavLinks={TestManagerSubNavLinks} />} >
            <Route index element={<TestManager />} />
            <Route path="result" element={<Result />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
