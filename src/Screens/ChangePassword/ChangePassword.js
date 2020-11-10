import React from 'react'
import StudentDashboardNavbars from '../../Components/StudentDashboardNavbars/StudentDashboardNavbars'
import { Navbar } from '../HomePage/components/Navbar_New'
import './ChangePassword.css'

function ChangePassword() {
    return (
        <div >
            <Navbar />
            
            <div className="coursepage">
                <StudentDashboardNavbars />
            <div className="flex">
                <div className="flex1">
                    <p className="change">Change Password</p>
                    <div className="cour">
                        <form className="form">
                            <label className="text1">Old Password</label><br />
                            <input type="text" name="name" className="input1" /><br /><br /><br /><br />
                            <label className="text1">New Password</label><br />
                            <input type="text" name="name" className="input1" /><br /><br /><br /><br />
                            <label className="text1">Confirm New Password</label><br />
                            <input type="text" name="name" className="input1" /><br /><br />
                            <button type="submit" className="confirm">Confirm Changes</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ChangePassword