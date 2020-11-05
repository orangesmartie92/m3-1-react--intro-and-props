import React from 'react';
import Avatar from './Avatar';

import './Header.css';

const Header = ({users}) => {
  return (
    <header>
      <div className="participants">
        {users.map((user, i) => (
          <div key={i} className="participant">
            <Avatar user={user} showUsername/>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
