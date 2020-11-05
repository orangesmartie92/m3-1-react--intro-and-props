import React from 'react';
import ReactDOM from 'react-dom';

import data, {users} from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div className="side-by-side">
    <App 
      currentUser={users.george} 
      conversation={data.conversation} 
      users={Object.values(users)} />
    <App 
      currentUser={users.elaine} 
      conversation={data.conversation} 
      users={Object.values(users)} />
  </div>
  ,
  rootElement
);
