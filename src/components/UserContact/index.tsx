import React, { useState } from 'react'
import { User } from '../../types'
import Modal from '../Modal'

import classes from './style.module.scss'

interface Iprops {
  user: User,
  date?: string
}

function UserContact (props: Iprops) {
  const { user, date } = props

  const [open, setOpen] = useState(false)

  return (
    <div className={classes.contact}>
      <Modal 
        open={open}
        onClose={() => setOpen(false)}
      >
        Hello
      </Modal>
      <img className={classes.avatar} src={user.avatarUrl} onClick={() => {setOpen(true)}}/>
      <div className={classes.info}>
        <span className={classes.name}>{user.name}</span>
      </div>
      <span className={classes.date}>{date}</span>
    </div>
  )
}

export default UserContact
