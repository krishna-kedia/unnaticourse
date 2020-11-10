import React from 'react'
import { Link } from 'react-router-dom';
import CoursePagesDashboard from '../Components/CoursePagesDashboard/CoursePagesDashboard';
import { Navbar } from './HomePage/components/Navbar_New';
import './TestPage.css'




function TestFinish() {
    return (
        <>
            <Navbar />
            <div className="assignment-score-page">
                <CoursePagesDashboard />
                <div className="assignments-page-info">
                <div className="assignment-name"> TEST 1</div>
                <div className="score">Your score is being evaluated by the Unnati entreprenuer</div>
                <div className="next-topic">Go to the next topic</div>
                </div>
            </div>

        </>
    )
}

export default TestFinish;