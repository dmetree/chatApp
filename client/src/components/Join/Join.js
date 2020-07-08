import React, { useState } from 'react'
import link, { Link } from 'react-router-dom'

function Join() {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div>
            <div>
                <h1>Join</h1>
                <div>
                    <input placeholder='Name' 
                    className="input" 
                    type="text" 
                    onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input 
                    placeholder='Room' 
                    className="input" 
                    type="text" 
                    onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`./chat?name=${name}&room=${room}`}>
                    <button className="joinBtn" type="submit"> Sing In</button>
                </Link>
            </div>
        </div>
    )
}
export default Join