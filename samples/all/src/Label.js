// @flow

import * as React from 'react';

type Props = {
  className: string;
  children: React.Node;
};

const Label = (props: Props) => (
  <h2 className={props.className}>
    {
      props.children
    }
  </h2>
);

export default Label;
