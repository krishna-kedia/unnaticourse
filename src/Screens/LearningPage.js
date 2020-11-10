import React from 'react'
import './LearningPage.css'

function LearningPage() {
    return(
        <div className="body">
            <div className="side-nav">
                <div className="course-name"><p>Data Entry</p></div>
                <div className="section-container">
                    <div className="section">
                        <div className="section-name">Section-1</div>
                        <div className="circle1"></div>
                    </div>
                    <div className="section">
                        <div className="section-name">Section-1</div>
                        <div className="circle1"></div>
                    </div>
                    <div className="section">
                        <div className="section-name">Section-1</div>
                        <div className="circle1"></div>
                    </div>
                </div>
            </div>
            <div className="video-box">
                <h2>Video</h2>
                <div className="video">
                <div className="video-bar-outer">
                    <div className="video-bar-inner"></div>
                </div>
                </div>
            </div>
            <div className="note-box">
                <h2>NOTES</h2>
                <div className="notes"></div>
            </div>
        </div>
    )
}

export default LearningPage