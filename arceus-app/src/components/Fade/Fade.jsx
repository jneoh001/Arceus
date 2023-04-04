import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="fade"
    timeout={3000}
  >
    {children}
  </CSSTransition>
);

export default Fade;
