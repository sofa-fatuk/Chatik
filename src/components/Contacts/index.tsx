import React from 'react';
import UserContact from '../UserContact';
import myImage from '../../assets/travis.svg'

import classes from './style.module.css'

function Contacts() {
  return (
    <div className={classes.contacts}>
      {new Array(100).fill(null).map(() => (
        <UserContact
          avatarUrl={myImage}
          name='Travis Barker'
          state='online'
        />
      ))}

    </div>
  );
}

export default Contacts;