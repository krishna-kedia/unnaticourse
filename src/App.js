import React from 'react';

import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AssignmentFinish from './Screens/AssignmentFinish/AssignmentFinish';
import StudentDashboard from './Screens/StudentDashbboard/StudentDashboard';
import AssignmentConfirmation from './Screens/AssignmentConfirmation/AssignmentConfimation'
import AssignmentStart from './Screens/AssignmentStart/AssignmentStart'
import CoursePagesDashboard from './Components/CoursePagesDashboard/CoursePagesDashboard';
import FeesPage from './Screens/FeesPage/FeesPage';
import Mainpage from './Screens/CoursePage/mainpage';
import ChangePassword from './Screens/ChangePassword/ChangePassword';
import VideoPage from './Screens/VideoPage/video';
import TestStart from './Screens/TestStart';
import TestFinish from './Screens/TestFinish';
import TestConfirmation from './Screens/TestConfirmation';
import Home from './Screens/HomePage/pages';
import CourseDashboard from './Screens/CourseDashboard/CourseDashboard';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route path="/" exact={true} component={Home} />
    <Route path="/1" component={AssignmentFinish} />
    <Route path="/2" component={AssignmentConfirmation} />
    <Route path="/3" component={AssignmentStart} />
    <Route path="/4" component={TestStart} />
    <Route path="/5" component={TestConfirmation} />
    <Route path="/6" component={TestFinish} />
    <Route path="/7" component={VideoPage} />
    <Route path="/8" component={ChangePassword} />
    <Route path="/9" component={FeesPage} />
    <Route path="/10" component={Mainpage} />
    <Route path="/11" component={CourseDashboard} />
    <Route path="/dashboard" component={StudentDashboard} />

    </div>
    </BrowserRouter>
  );
}

export default App;
