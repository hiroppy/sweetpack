// @flow

import styles from './style.css';

const elm: HTMLElement = document.createElement('h2');

elm.className = styles.boron;

elm.innerHTML = `
  library: none<br>
  process.env.BORON: ${process.env.BORON}<br>
  className: ${styles.boron}
`;

const rootEl: HTMLElement | null = document.getElementById('boron');
if (rootEl) rootEl.append(elm);
