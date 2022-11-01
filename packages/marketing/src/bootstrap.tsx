import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.scss';

const mount = (el: HTMLElement) => {
	ReactDOM.createRoot(el)
	.render(<App />);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing') as HTMLElement;

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
