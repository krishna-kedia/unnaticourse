import React from 'react'
import './StudentDashboard.css'
import '../assets/Unnati Logo Tree.svg'
import user from '../../assets/Icons/user.svg'
import profileUser from '../../assets/Icons/profile-user.svg'
import lock from '../../assets/Icons/padlock.svg'
import ruppee from '../../assets/Icons/rupee.svg'
import logout from '../../assets/Icons/logout.svg'
import dashboard from '../../assets/Icons/dashboard.svg'
import home from '../../assets/Icons/home.svg'
import courses from '../../assets/Icons/education.svg'
import { Link } from 'react-router-dom'
function StudentDashboardNavbars() {
    return (
        <>
            

            <div className="left-pane">
                <div className="profile-pic">
                    <img src={profileUser} className="profile-pic" />
                </div>
                <div className="user-name"><p>Hi, John!</p></div>
                <div className="dashboard-option">
                    <p>Dashboard</p>
                    <Link to="dashboard"><div className="dashboard-options">
                        <div><img src={dashboard} className="icon" /></div>
                        <div className="option">View Dashboard</div>
                    </div></Link>
                    <Link to="/10"><div className="dashboard-options">
                        <div className="icon"><img src={courses} className="icon" /></div>
                        <div className="option">Enrolled Courses</div>
                    </div></Link>
                </div>
                <div className="user-setting">
                    <p>Profile</p>
                    <div className="user-settings">
                        <div className="icon"><img src={user} className="icon" /></div>
                        <div className="setting">Update Profile Info</div>
                    </div>
                    <Link to="/8"><div className="user-settings">
                        <div className="icon"><img src={lock} className="icon" /></div>
                        <div className="setting">Change Password</div>
                    </div></Link>
                    <Link to="/9"><div className="user-settings">
                        <div className="icon"><img src={ruppee} className="icon" /></div>
                        <div className="setting">Fees</div>
                    </div></Link>
                    <div className="user-settings">
                        <div><img src={logout} className="icon" /></div>
                        <div className="setting">Sign Out</div>
                    </div>
                    
                </div>
                
                <Link to="/"><div className="back-btn">
                        <div className="back-btn-icon"><img src={home} className="test-topic-icon" /></div>
                        <div className="back-btn-text">BACK TO HOME</div>
                </div></Link>
            </div>


        </>
    )
}

export default StudentDashboardNavbars 