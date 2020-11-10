import React from 'react'
import './AssignmentStart.css'
import CoursePagesDashboard from '../../Components/CoursePagesDashboard/CoursePagesDashboard';
import { Navbar } from '../HomePage/components/Navbar_New';
import { Link } from 'react-router-dom';
function AssignmentStart() {
    return (
        <>
            <Navbar />
            <div className="assignment-start-page">
                <CoursePagesDashboard />
                <div className="assignment-div">
                    <div className="assignment-heading">Assignment</div>
                    <div className="question-paper">
                    <div className="question">
                            <form>
                                <p><b>Q2)</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.</p>
                                <input type="radio" id="option 1" name="option 1" />
                                <label for="option 1">Option 1</label><br />
                                <input type="radio" id="option 2" name="option 2" />
                                <label for="option 2">Option 2</label><br />
                                <input type="radio" id="option 3" name="option 3" />
                                <label for="option 3">Option 3</label><br />
                                <input type="radio" id="option 4" name="option 4" />
                                <label for="option 4">Option 4</label>
                            </form>
                        </div>
                        <div className="question">
                            <form>
                                <p><b>Q2)</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.</p>
                                <input type="radio" id="option 1" name="option 1" />
                                <label for="option 1">Option 1</label><br />
                                <input type="radio" id="option 2" name="option 2" />
                                <label for="option 2">Option 2</label><br />
                                <input type="radio" id="option 3" name="option 3" />
                                <label for="option 3">Option 3</label><br />
                                <input type="radio" id="option 4" name="option 4" />
                                <label for="option 4">Option 4</label>
                            </form>
                        </div>
                        <div className="question">
                            <form>
                                <p><b>Q2)</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.</p>
                                <input type="radio" id="option 1" name="option 1" />
                                <label for="option 1">Option 1</label><br />
                                <input type="radio" id="option 2" name="option 2" />
                                <label for="option 2">Option 2</label><br />
                                <input type="radio" id="option 3" name="option 3" />
                                <label for="option 3">Option 3</label><br />
                                <input type="radio" id="option 4" name="option 4" />
                                <label for="option 4">Option 4</label>
                            </form>
                        </div>
                        <div className="question">
                            <form>
                                <p><b>Q2)</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.</p>
                                <input type="radio" id="option 1" name="option 1" />
                                <label for="option 1">Option 1</label><br />
                                <input type="radio" id="option 2" name="option 2" />
                                <label for="option 2">Option 2</label><br />
                                <input type="radio" id="option 3" name="option 3" />
                                <label for="option 3">Option 3</label><br />
                                <input type="radio" id="option 4" name="option 4" />
                                <label for="option 4">Option 4</label>
                            </form>
                        </div>
                        
                       
                       
                        
                    </div>
                   <Link to="1"> <div className="submit-button">
            <button className="btn">Submit</button>
        </div></Link>
                </div>
                
            </div>
        </>
    )
}

export default AssignmentStart