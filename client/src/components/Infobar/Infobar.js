import React from 'react'

const Infobar = ({room}) => {
    return (
        <div>
            <div>
                {/* <img src="onlineIcon" alt="O"/> */}
                <h3>{room}</h3>
            </div>
            <div>
                <a href="/">
                    {/* <img src="closeIcon" alt="X"/> */}
                </a>
            </div>
        </div>
    )
}
export default Infobar