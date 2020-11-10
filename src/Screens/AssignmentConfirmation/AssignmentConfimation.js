import React from 'react'
import { Link } from 'react-router-dom';
import CoursePagesDashboard from '../../Components/CoursePagesDashboard/CoursePagesDashboard';
import { Navbar } from '../HomePage/components/Navbar_New';
import './AssignmentConfimation.css'




function AssignmentFinish() {
    return (
        <>
            <Navbar />
            <div className="assignment-score-page">
                <CoursePagesDashboard />
                <div className="assignments-page-info">
                <div className="assignment-name">ASSIGNMENT 1</div>
                <div className="assignment-title">ASSIGNMENT TITLE: <span>lorem ipsum</span></div>
                <div className="assignment-duration">ASSIGNMENT DURATION: <span>30min</span></div>
                <div className="assignment-highest-score">HIGHEST SCORE:  <span>15</span>/20</div>
                <Link to="3"><div className="attempts">
                   <div> Clik here to start the assignment:<br/>(3 Attempts left)</div>
                </div></Link>
                </div>
            </div>

        </>
    )
}

export default AssignmentFinish;