import React from 'react';

const Label = (props) => (
  <h2 className={props.className}>
    {
      props.children
    }
  </h2>
);

export default Label;
