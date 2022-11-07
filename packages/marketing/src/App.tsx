import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
	return (
	<BrowserRouter>
    <Routes>
			<Route path='/' element={<Landing />} />
			<Route path="pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>
	)
}

export default App;
