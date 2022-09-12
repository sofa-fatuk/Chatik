import React from 'react'
import classes from './style.module.scss'

interface IProps extends React.HTMLProps<HTMLInputElement> {
  hasError?: boolean,
  errorMessage?: string,
}

function Input(props: IProps) {
  const {
    ...rest
  } = props;

  return (
    <label>
      <input
        className={classes.input}
        {...rest}
      />
    </label>
  )
}

export default Input;
