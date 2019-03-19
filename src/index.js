import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App.js';
//importing robots class that is an array of items containing id,name etc
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App/>
	, document.getElementById('root'));

serviceWorker.unregister();
