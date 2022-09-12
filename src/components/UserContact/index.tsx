import React from 'react'
import { User } from '../../types'

import classes from './style.module.scss'

interface Iprops {
  user: User,
}

function UserContact (props: Iprops) {
  const { user } = props

  return (
    <div className={classes.contact}>
      <img className={classes.avatar} src={user.avatarUrl} />
      <div className={classes.info}>
        <span className={classes.name}>{user.name}</span>
        {/* <span className={classes.date}>{user.date}</span> */}
      </div>
    </div>
  )
}

export default UserContact
