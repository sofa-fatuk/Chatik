import React, { useState, ChangeEvent } from 'react'
import Input from '../../components/Input'
import UserContact from '../../components/UserContact'
import Massage from '../../components/Massage'

import myImage from '../../assets/kate.svg'
import classes from './style.module.scss'
import Contacts from '../../components/Contacts'
import { User } from '../../types'

function MainPage() {
  const [search, setChangeSearch] = useState('')

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setChangeSearch(value)
    
  }

  return (
    <div className={classes.mainPage}>
      <div className={classes.contactsBox}>
        <div className={classes.search}>
          <h1 className={classes.title}>Massage</h1>
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
        <div className={classes.contacts}>
          <Contacts 
            search={search}
          />
        </div>
      </div>
      <div className={classes.chatRoom}>
        <div className={classes.user}>
          <UserContact
            user={{
              avatarUrl: myImage,
              name: 'Kate Rose',
            } as User}
            // state='online'
          />
        </div>
        <div className={classes.chat}>
          {new Array(100).fill(null).map((_, index) => (
            <Massage
              // TODO: change to actual id 
              key={index}
              avatarUrl={myImage}
              text='Hello! Have you seen my backpack anywhere in office?'
              date='15:42'
            />
          ))}
        </div>
        <div className={classes.textarea}>
          
        </div>
      </div>
    </div>
  );
}

export default MainPage;
