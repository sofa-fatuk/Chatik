import React, { Component, ErrorInfo, ReactNode } from 'react'
import { NavigateFunction } from 'react-router-dom'

import withNavigate from "../../hocs/withNavigate"

import classes from './style.module.scss'

type Props = {
  children: ReactNode,
  navigate: NavigateFunction,
}
type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    // вызывает конструктор родителя с этими пропсами
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
  }

  onClickGoHome() {
    this.props.navigate('/some')
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return (
        <div className={classes.container}>
          <h1>Something goes wrong.</h1>
          <button onClick={this.onClickGoHome}>Go to homepage</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withNavigate(ErrorBoundary)
