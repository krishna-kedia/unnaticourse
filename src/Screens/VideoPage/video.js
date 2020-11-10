import React from 'react'
import ReactPlayer from 'react-player'
import './video.css';
import pdf from './downloadpdf.pdf'
import downloadpdf from './pdfdownload.jpeg'
import CoursePagesDashboard from '../../Components/CoursePagesDashboard/CoursePagesDashboard';
import { Navbar } from '../HomePage/components/Navbar_New';


function VideoPage() {
    return (
        <>
            <Navbar />
            <div className="coursepage">
            <CoursePagesDashboard />
            <div className="videopage">
                <div className="mainpage">
                    <div className="container">
                        <div className="videoplayer">
                            <ReactPlayer width='65vw' height='80vh' controls url="https://www.youtube.com/watch?v=_plGdWmqFE4&ab_channel=rrgraph" />
                        </div >
                        <div className="downloadpdf">
                            <div className="image">
                                <a href={pdf} download="downloadpdf.pdf"><img src={downloadpdf} width='200vw' height='60vw' /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default VideoPage

