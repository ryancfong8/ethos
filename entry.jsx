import React from 'react';
import ReactDOM from 'react-dom';
import Tree from './tree';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Tree />, root);
});
