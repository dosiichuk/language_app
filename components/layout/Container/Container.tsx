import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Component: React.FC<Props> = ({ children }) => {
  return <div className="container is-max-desktop mt-5 mb-3">{children}</div>;
};

export { Component as Container, Component as ContainerComponent };
