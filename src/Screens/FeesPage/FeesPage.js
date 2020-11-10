import React from 'react'
import CoursePagesDashboard from '../../Components/CoursePagesDashboard/CoursePagesDashboard'
import StudentDashboardNavbars from '../../Components/StudentDashboardNavbars/StudentDashboardNavbars'
import { Navbar } from '../HomePage/components/Navbar_New'
import './FeesPage.css'
function FeesPage() {
    return <>
        <Navbar />
        <div className="feespage">
            <StudentDashboardNavbars />
            <div className="flex">
                <div className="flex1">
                    <div className="fee">Fees</div>
                    <div className="fees">
                        <div className="due">Due Fees</div>
                        <div className="due1">Rs. 300</div>
                        <div className="due3">Paid Amount</div>
                        <div className="due2">Rs. 1000</div>
                        <button className="payment-btn">
                            Make Online Payment
                </button>
                    </div>

                </div>
                <div className="flex1">
                    <div className="fee">Past Receipts</div>
                    <div className="fees1">
                        <div className="flex">
                            <div className="subcol"><br /><div className="heading">Date</div>
                                <br /> 29/9/2020 <br /><br />29/9/2020 <br /><br /> 29/9/2020<br /> <br /> 29/9/2020
                            <br /> <br /> 29/9/2020
                            <br /> <br /> 29/9/2020
                            <br /> <br /> 29/9/2020

          </div>
                            <div className="subcol2"><br /><div className="heading">Transaction ID</div>
                                <br /> 201020320 <br /><br /> 201020320
                            <br /><br /> 201020320
                            <br /><br /> 201020320
                            <br /><br /> 201020320
                            <br /><br /> 201020320
                            <br /><br /> 201020320
          </div>
                            <div className="subcol"><br /><div className="heading">Mode</div>
                                <br /> Online <br /><br /> Online
                            <br /><br /> Online
                            <br /><br /> Online
                            <br /><br /> Online
                            <br /><br /> Online
                            <br /><br /> Online
          </div>
                            <div className="subcol"><br /><div className="heading">Amount</div>
                                <br /> 300 <br /> <br />300
                            <br /> <br />300
                            <br /> <br />300
                            <br /> <br />300
                            <br /> <br />300
                            <br /> <br />300
          </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FeesPage