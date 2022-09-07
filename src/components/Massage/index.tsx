import React from 'react'

import classes from './style.module.css';

interface Iprops {
  avatarUrl: string,
  text: string,
  date: string,
}

function Massage (props: Iprops) {
  const {avatarUrl, text, date} = props

  return (
    <div className={classes.massage}>
      <div className={classes.avatar}>
        <img src={avatarUrl} alt="" />
      </div>
      <div className={classes.content}>
        <div className={classes.bubble}>
          <p className={classes.text}>{text}</p>
        <span className={classes.date}>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default Massage