import React from 'react'
import { Link } from 'react-router-dom';
import CoursePagesDashboard from '../Components/CoursePagesDashboard/CoursePagesDashboard';
import { Navbar } from './HomePage/components/Navbar_New';
import './TestPage.css'




function TestConfirmation() {
    return (
        <>
            <Navbar />
            <div className="assignment-score-page">
                <CoursePagesDashboard />
                <div className="assignments-page-info">
                <div className="assignment-name">TEST</div>
                <div className="assignment-title">ASSIGNMENT TITLE: <span>lorem ipsum</span></div>
                <div className="assignment-duration">ASSIGNMENT DURATION: <span>30min</span></div>
                <div className="assignment-highest-score">HIGHEST SCORE:  <span>15</span>/20</div>
               <Link to="4"> <div className="attempts">
                   <div> Clik here to start the test:<br/>(3 Attempts left)</div>
                </div></Link>
                </div>
            </div>

        </>
    )
}

export default TestConfirmation;