import React from 'react'
import Testcomponent from './testcomponent';
import testdata from './testdata';
import Assignmentcomponent from './assignmentcomponent';
import Assignmentdata from './assignmentdata';
import Sectioncomponent from './sectioncomponent';
import Sectiondata from './sectiondata';
import './mainpagecss.css';
import msexcel from './msexcel2.jpg'
import StudentDashboardNavbars from '../../Components/StudentDashboardNavbars/StudentDashboardNavbars';
import { Navbar } from '../HomePage/components/Navbar_New';
function Mainpage() {
    return (
        <>
        <Navbar />
        <div className="coursepage">
            <StudentDashboardNavbars />
        <div className="mainpage">
            
            <div className="biggestbigcontainer">

            <div className="enrolledcourse">ENROLLED COURSES</div>

            <div className="biggestcontainer">
                <div className="leftmsexcel"> MSEXCEL</div>
                <div className="dots">
                    <input className="dot1" type="radio" name="pagelinked" value="page1" onChange="window.location.replace('https://www.google.com/')"></input>
                    <input className="eachdot" type="radio" name="pagelinked" value="page2"></input>
                    <input className="eachdot" type="radio" name="pagelinked" value="page3"></input>
                    <input className="eachdot" type="radio" name="pagelinked" value="page4"></input>
                    <input className="eachdot" type="radio" name="pagelinked" value="page5"></input>
                </div>
                <div className="biggy">


                    <div className="formsexcelpercent">
                        <div className="msexcel"><img src={msexcel} width="50vw" height="50vw" />    MS EXCEL</div>
                        <div className="percent">30% COMPLETED</div>
                    </div>


                    <div className="box123container">
                        <div className="box1">
                            <div className="boxheading">SECTION</div>
                            <Sectioncomponent
                                name={Sectiondata[0].name}
                                imgsrc={Sectiondata[0].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[1].name}
                                imgsrc={Sectiondata[1].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[2].name}
                                imgsrc={Sectiondata[2].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[3].name}
                                imgsrc={Sectiondata[3].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[4].name}
                                imgsrc={Sectiondata[4].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[5].name}
                                imgsrc={Sectiondata[5].imgsrc} />
                        </div>

                        <div className="box2">
                            <div className="boxheading">ASSIGNMENT</div>
                            <Assignmentcomponent
                                name={Assignmentdata[0].Assignname}
                                imgsrc={Assignmentdata[0].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[1].Assignname}
                                imgsrc={Assignmentdata[1].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[2].Assignname}
                                imgsrc={Assignmentdata[2].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[3].Assignname}
                                imgsrc={Assignmentdata[3].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[4].Assignname}
                                imgsrc={Assignmentdata[4].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[5].Assignname}
                                imgsrc={Assignmentdata[5].imgsrc} />
                        </div>

                        <div className="box3">
                            <div className="boxheading">TESTS</div>
                            <Testcomponent
                                name={testdata[0].testname}
                                imgsrc={testdata[0].imgsrc} />
                            <Testcomponent
                                name={testdata[1].testname}
                                imgsrc={testdata[1].imgsrc} />
                            <Testcomponent
                                name={testdata[2].testname}
                                imgsrc={testdata[2].imgsrc} />
                            <Testcomponent
                                name={testdata[3].testname}
                                imgsrc={testdata[3].imgsrc} />
                            <Testcomponent
                                name={testdata[4].testname}
                                imgsrc={testdata[4].imgsrc} />
                            <Testcomponent
                                name={testdata[5].testname}
                                imgsrc={testdata[5].imgsrc} />
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Mainpage;