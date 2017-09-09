import React from 'react';
import ReactDOM from 'react-dom';
import js from '../images/js.png';
import Label from './Label';
import styles from './style.css';

const rootEl = document.getElementById('carbon');

console.log(js);
const render = () => {
  ReactDOM.render(
    <div>
      <Label className={styles.carbon}>
        library: react<br />
        process.env.ARGON: {process.env.CARBON}<br />
        className: {styles.carbon}<br />
      </Label>
      <img src={js} />
    </div>,
    rootEl
  );
};

render();
