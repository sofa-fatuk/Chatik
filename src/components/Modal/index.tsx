import React, { ReactNode } from 'react'

import classes from './style.module.scss'

interface Iprops {
  children: ReactNode,
  open: boolean,
  onClose: () => void
}

function Modal (props: Iprops) {
  const { children, open, onClose } = props 

  if (!open) return null 

  return (
    <>
      <div className={classes.hidden}/>
      <div className={classes.window}>
        {children}
        <button className={classes.closed} onClick={onClose}>
          close
        </button>
      </div>
    </>
  )
}

export default Modal