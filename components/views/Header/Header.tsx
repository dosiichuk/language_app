import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Component: React.FC<Props> = ({ children }) => {
  return <div className="notification is-primary">{children}</div>;
};

export { Component as Header, Component as HeaderComponent };
