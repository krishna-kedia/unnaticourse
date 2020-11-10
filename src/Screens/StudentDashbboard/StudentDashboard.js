import React from 'react'
import StudentDashboardNavbars from '../../Components/StudentDashboardNavbars/StudentDashboardNavbars'
import './StudentDashboard.css'
import bell from '../../assets/Icons/bell.svg'
import excel from '../../assets/Icons/excel.svg'
import next from '../../assets/Icons/next.svg'
import check from '../../assets/Icons/tick.svg'
import { Navbar } from '../HomePage/components/Navbar_New'
import { Link } from 'react-router-dom'
function StudentDashboard() {
    return (
        <body>
            <Navbar />
            <div className="page">
                <StudentDashboardNavbars />
                <div className="dashboard-info">
                    <p>Dashboard</p>
                    <div className="notifications">
                    <div className="notification">
                            <div className="notification-icon"><img src={bell} className="notification-icon" /></div>
                            <div className="notification-text"> Notification Text 1</div>
                        </div>
                        <div className="notification">
                        <div className="notification-icon"><img src={bell} className="notification-icon" /></div>
                            <div className="notification-text"> Notification Text 1</div>
                        </div>
                    </div>

                    <div className="dashboard">
                        <div className="my-courses">
                            <div className="my-courses-text">MY COURSES</div>
                            <Link to="11"><div className="my-courses-div">
                                <div className="course-info">
                                    <div className="course-icon"><img src={excel} className="course-icon" /></div>
                                    <div className="course-name">MS EXCEL</div>
                                    <div className="completion-rate"><span>70%</span>course complete</div>
                                </div>

                                <div className="up-next">
                                    <div className="next-icon"><img src={next} className="next-icon"/></div>
                                    <h4>UP NEXT</h4><br />
                                    <h5>Video:</h5><br />
                                    <div className="next-info">intoduction to charts<br />and formulae</div>
                                </div>

                                <div className="topic">
                                    <span>TOPICS COVERED</span>
                                    <div className="topics-covered">
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-info">
                                    <div className="course-icon"><img src={excel} className="course-icon" /></div>
                                    <div className="course-name">MS EXCEL</div>
                                    <div className="completion-rate"><span>70%</span>course complete</div>
                                </div>

                                <div className="up-next">
                                    <div className="next-icon"><img src={next} className="next-icon"/></div>
                                    <h4>UP NEXT</h4><br />
                                    <h5>Video:</h5><br />
                                    <div className="next-info">intoduction to charts<br />and formulae</div>
                                </div>

                                <div className="topic">
                                    <span>TOPICS COVERED</span>
                                    <div className="topics-covered">
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                        <div className="topic-name">
                                            <div className="icon"><img src={check} className="icon" /></div>
                                            <span>Intoduction to Excel</span>
                                        </div>
                                    </div>
                                </div>
                            </div></Link>
                        </div>
                        <div className="due-assignments">
                            <div className="due-assignments-text">DUE ASSIGNMENTS</div>
                            <div className="due-assignments-div">
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>
                                <div className="due-assignments-info">
                                    <div className="due-assignments-date">7 Nov 2020: </div>
                                    <div className="due-assignments-topic">How to make charts</div>
                                </div>

                            </div>
                        </div>
                        <div className="to-do">
                            <div className="to-do-text">TO-DO-LIST</div>
                            <div className="to-do-div">
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                                <div className="to-do-info">
                                    <div className="icon"><img src={check} className="icon" /></div>
                                    <div className="to-do-topic">Learn Pronouns</div>
                                </div>
                            </div>
                        </div>
                        <div className="upcoming-tests">
                            <div className="upcoming-tests-text">UPCOMING TESTS</div>
                            <div className="upcoming-tests-div">
                                <div className="upcoming-tests-info">
                                    <div className="upcoming-tests-date">9 Nov 2020: [MS Excel]</div>
                                    <div className="upcoming-tests-topic">Introduction to HTML + Introduction to charts</div>
                                </div>
                                <div className="upcoming-tests-info">
                                    <div className="upcoming-tests-date">9 Nov 2020: [MS Excel]</div>
                                    <div className="upcoming-tests-topic">Introduction to HTML + Introduction to charts</div>
                                </div>
                                <div className="upcoming-tests-info">
                                    <div className="upcoming-tests-date">9 Nov 2020: [MS Excel]</div>
                                    <div className="upcoming-tests-topic">Introduction to HTML + Introduction to charts</div>
                                </div>
                                <div className="upcoming-tests-info">
                                    <div className="upcoming-tests-date">9 Nov 2020: [MS Excel]</div>
                                    <div className="upcoming-tests-topic">Introduction to HTML + Introduction to charts</div>
                                </div>
                                <div className="upcoming-tests-info">
                                    <div className="upcoming-tests-date">9 Nov 2020: [MS Excel]</div>
                                    <div className="upcoming-tests-topic">Introduction to HTML + Introduction to charts</div>
                                </div>
                                <div className="upcoming-tests-info">
                                    <div className="upcoming-tests-date">9 Nov 2020: [MS Excel]</div>
                                    <div className="upcoming-tests-topic">Introduction to HTML + Introduction to charts</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>



        </body>
    )
}

export default StudentDashboard