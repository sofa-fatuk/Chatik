import React from 'react'

import classes from './style.module.css'

interface Iprops {
  avatarUrl: string,
  name: string,
  state: string
}

function UserContact (props: Iprops) {
  const { avatarUrl, name, state } = props

  return (
    <div className={classes.contact}>
      {/* <img className={classes.avatar__img} src="../../assets/Ellipse_1.png" /> */}
      <img className={classes.avatar} src={avatarUrl} />
      <div className={classes.info}>
        <span className={classes.name}>{name}</span>
        <span className={classes.state}>{state}</span>
      </div>
    </div>
  )
}

export default UserContact
