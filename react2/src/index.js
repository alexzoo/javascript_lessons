import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

const Header = () => {
	return <h2>Hello World!</h2>;
};

const Field = () => {
	const holder = 'Enter here';
	const styledField = {
		width: '300px',
	};
	return <input style={styledField} type="text" placeholder={holder} />;
};

const Btn = () => {
	const text = 'Log in';
	const logged = true;

	return <button>{logged ? 'Enter' : text}</button>;
};

const App = () => {
	return (
		<div>
			<Header />
			<Field />
			<Btn />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
