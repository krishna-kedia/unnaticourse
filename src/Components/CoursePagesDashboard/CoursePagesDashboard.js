import React from 'react'
import { Link } from 'react-router-dom';
import './CoursePagesDashboard.css'
import profileUser from '../../assets/Icons/profile-user.svg'
import dashboard from '../../assets/Icons/dashboard.svg'
import arrow from '../../assets/Icons/right-arrow.svg'
import play from '../../assets/Icons/play-button.svg'
import homework from '../../assets/Icons/homework.svg'
import test from '../../assets/Icons/test.svg'



function CoursePagesDashboard() {
    return (
        <>
            <div className="second-nav">
                <div className="user-info">
                    <div className="user-info-icon">
                        <img src={profileUser} className="profile-icon"/>
                    </div>
                    <div className="user-info-name">
                        <p>ADITYA</p>
                        <span>Badrapur Cafe</span>
                    </div>
                </div>
                <div className="course-dashboard">
                    <div className="course-dashboard-text">
                        <div>Course Dashboard</div>
                        <div><img src={dashboard} className="dashboard-icon" /></div>
                    </div>
                    <div className="course-information">
                        <div className="course-info-topic">
                        <Link to="11"><div className="course-info-topic-name">COURSE TOPIC 2</div>
                            <div className="course-info-topic-icon">
                                <img src={arrow} className="course-info-topic-icon" />
                            </div></Link>
                        </div>
                        <Link to="7"><div className="course-topic">
                            <div className="course-topic-name">Topic Video-1</div>
                            <div className="course-topic-icon">
                                <img src={play} className="course-topic-icon" />
                            </div>
                        </div></Link>

                        <Link to="2"><div className="assignment-topic">
                            <div className="assignment-topic-name">Assignment-1</div>
                            <div className="assignment-topic-icon">
                                <img src={homework} className="assignment-topic-icon" />
                            </div>
                        </div></Link>

                        <Link to="5"><div className="test-topic">
                            <div className="test-topic-name">Topic Video-1</div>
                            <div className="test-topic-icon">
                                <img src={test} className="test-topic-icon" />
                            </div>
                        </div></Link>
                    </div>
                    <Link to="dashboard"><div className="back">
                        <div className="back-icon"><img src={homework} className="test-topic-icon" /></div>
                        <div className="back-text">BACK TO STUDENT DASHBOARD</div>
                    </div></Link>
                </div>
            </div>
        </>
    )
}

export default CoursePagesDashboard;