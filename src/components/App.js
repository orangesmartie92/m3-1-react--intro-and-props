import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = ({currentUser, conversation, users}) => {
  return (
    <div className='wrapper'>
      <Header users={users.filter(user => user !== currentUser)}/>
      <ChatStream messages={conversation.messages} currentUser={currentUser}/>
      <Footer />
    </div>
  );
};

export default App;
