import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.createElement('div');
document.body.append(rootEl);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
