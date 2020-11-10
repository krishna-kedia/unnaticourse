import React from 'react'
import CoursePagesDashboard from '../../Components/CoursePagesDashboard/CoursePagesDashboard'
import { Navbar } from '../HomePage/components/Navbar_New'
import './CourseDashboard.css'
import './css-circular-prog-bar.css'

function CourseDashboard() {
    return (
        <>
            <Navbar />
            <div className="page">
                <CoursePagesDashboard />
                <div className="coursedashboard">

                    
                    <div className="left-page">
                    <p>MS EXCEL</p>
                        <div class="progress-circle p54">
                            <span>10%</span>
                            <div class="left-half-clipper">
                                <div class="first50-bar"></div>
                                <div class="value-bar"></div>
                            </div>
                        </div>
                        <div className="doubt">Have a doubt? Ask an expert</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDashboard