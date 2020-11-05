import React from 'react';
import './Avatar.css'
function Avatar({user, showUsername}){
    return (
        <div className="avatar">
            <img src={user.avatar} alt="avatar"/>
            {showUsername && (
                <div className="username">
                    {user.username}
                </div>
            )}
        </div>
    )
}

export default Avatar;