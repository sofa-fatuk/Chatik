import React, { Component } from "react"
import { useNavigate } from "react-router-dom"

const withNavigate = (WrappedComponent: typeof Component) => (props: any) => {
  const navigate = useNavigate();

  return (
      <WrappedComponent
          {...props}
          navigate={navigate}
      />
  );
};

export default withNavigate
