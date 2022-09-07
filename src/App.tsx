import React, { useState, ChangeEvent } from 'react';
import Contacts from './components/Contacts';
import Input from './components/Input';
import UserContact from './components/UserContact';
import Massage from './components/Massage';

import myImage from './assets/kate.svg'
import classes from './style.module.css'

function App() {
  const [search, setChangeSearch] = useState('')

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setChangeSearch(value)
  }

  return (
    <div className={classes.mainPage}>
      <div className={classes.contacts}>
        <div className={classes.contacts__search}>
          <h1 className={classes.contacts__title}>Massege</h1>
          <div>
            <Input
              placeholder="Search"
              type="text"
              onChange={onChangeSearch}
              value={search}
              required
            />
          </div>
        </div>
        <div className={classes.contacts__list}></div>
        <Contacts />
      </div>
      <div className={classes.chatRoom}>
        <div className={classes.chatRoom__user}>
          <UserContact
            avatarUrl={myImage}
            name='Kate Rose'
            state='online'
          />
        </div>
        <div className={classes.chatRoom__chat}>
          {new Array(100).fill(null).map(() => (
            <Massage
              avatarUrl={myImage}
              text='Hello! Have you seen my backpack anywhere in office?'
              date='15:42'
            />
          ))}
        </div>
        <div className={classes.chatRoom__input}>
          {/* <Input
            placeholder="Сообщенька"
            type="text"
            onChange={onChangeSearch}
            value={search}
            required
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
