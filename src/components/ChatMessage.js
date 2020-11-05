import React from 'react';
import Avatar from './Avatar';
import './ChatMessage.css';

function ChatMessage({
    messageType,
    message: {
        user,
        body,
    } = {}
}){
    return (
        <div className={`chat-message ${messageType || ""}`}>
            {messageType === 'received' && (
                <Avatar user={user}/>
            )}
            <div className="message">
                {messageType === 'received' && (
                    <div className="username">
                        {user.username}
                    </div>
                )}
                <div className="bubble">
                    {body}
                    <img 
                        className="bubble-tip" 
                        src={messageType === 'received'? '/assets/tip-received.svg' : '/assets/tip-sent.svg'}
                        alt="bubble-tip"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatMessage;