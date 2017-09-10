// @flow

import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import Label from './Label';
import styles from './style.css';

const rootEl: HTMLElement | null = document.getElementById('argon');

const render = () => {
  if (rootEl) {
    ReactDOM.render(
      <AppContainer>
        <Label className={styles.argon}>
          library: react<br />
          process.env.ARGON: {process.env.ARGON}<br />
          className: {styles.argon}<br />
        </Label>
      </AppContainer>,
      rootEl
    );
  }
};

render();

if (module.hot) {
  module.hot.accept('./Label', () => {
    render();
  });
}
