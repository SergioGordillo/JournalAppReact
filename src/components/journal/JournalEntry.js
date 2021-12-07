import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                 style={{
                     backgroundSize:"cover",
                     backgroundImage:"url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/interior-christmas-magic-glowing-tree-fireplace-royalty-free-image-1628537941.jpg)"

                 }}>
            </div>

            <div className="journal__entry-body">
                 <p className="journal__entry-title">Christmas are here</p>
                 <p className="journal__entry-content">Lorem Ipsum</p>
            </div>

            <div className="journal__entry-date-box">
                 <span>Monday</span>
                 <h4>28</h4>
            </div>
        </div>
    )
}
