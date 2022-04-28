import React from 'react';

const Component: React.FC = () => {
  return (
    <progress className="progress is-small is-primary" max="100">
      25%
    </progress>
  );
};

export { Component as ProgressBar, Component as ProgressBarComponent };
