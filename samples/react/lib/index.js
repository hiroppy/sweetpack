import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

console.log(styles);
const rootEl = document.getElementById('root');

const Sample = () => (
  <h1 className={styles.title}>sample</h1>
);

ReactDOM.render(
  <div>
    <Sample />
  </div>,
  rootEl
);
