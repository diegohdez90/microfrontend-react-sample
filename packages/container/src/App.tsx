import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Marketing from './components/Marketing';
import NavigationBar from './components/NavigationBar';


const App = () => {

	return(<BrowserRouter><div>
		<NavigationBar />
		<Marketing />
	</div>
	</BrowserRouter>);
};

export default App;
