import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link
} from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';
import './style.scss';

const router = createBrowserRouter([{
	path: '/',
	element: <Landing />
}, {
	path: '/pricing',
	element: <Pricing />
}])

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(<RouterProvider router={router} />);
