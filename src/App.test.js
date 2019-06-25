import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 13d87270069f7cc23262ed45436dc430f7a9b9f1
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
