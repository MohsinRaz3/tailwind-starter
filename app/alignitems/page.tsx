import React from 'react'

export default function page() {
    return (
        <div className="w-full h-screen icon-wrap flex justify-center items-center">
            {/* justify X-axis ||  items Y-axis */}
            {/* w-full (screen width full) || h-screen (screen height full) */}
            <span className="icon"
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg
                ></span>
            <span className="icon-text">Video Conference</span>
        </div>

    )
}
