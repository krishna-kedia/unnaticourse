import React from 'react'
import { Link } from 'react-router-dom';
import CoursePagesDashboard from '../../Components/CoursePagesDashboard/CoursePagesDashboard';
import { Navbar } from '../HomePage/components/Navbar_New';
import './AssignmentFinish.css'




function AssignmentFinish() {
    return (
        <>
            <Navbar />
            <div className="assignment-score-page">
                <CoursePagesDashboard />
                <div className="assignments-page-info">
                <div className="assignment-name">ASSIGNMENT 1</div>
                <div className="assignment-score">YOUR SCORE:  <span>15</span>/20</div>
                <div className="attempts">
                   <div> Attempt Again (2 Attempts Left)</div>
                </div>
                </div>
            </div>

        </>
    )
}

export default AssignmentFinish;