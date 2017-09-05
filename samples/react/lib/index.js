import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

const rootEl = document.createElement('div');
document.body.append(rootEl);

const Sample = () => (
  <h1 className={styles.title}>sample</h1>
);

ReactDOM.render(
  <div>
    <Sample />
  </div>,
  rootEl
);
