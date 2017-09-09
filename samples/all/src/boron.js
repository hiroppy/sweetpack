import styles from './style.css';

const elm = document.createElement('h2');

elm.className = styles.boron;

elm.innerHTML = `
  library: none<br>
  process.env.BORON: ${process.env.BORON}<br>
  className: ${styles.boron}
`;

const rootEl = document.getElementById('boron');
rootEl.append(elm);
