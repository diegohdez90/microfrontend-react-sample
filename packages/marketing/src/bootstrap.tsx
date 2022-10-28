import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import './style.scss';


createRoot(document.querySelector('#root') as HTMLElement)
	.render(<App />);
