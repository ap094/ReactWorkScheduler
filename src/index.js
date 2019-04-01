import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Basic from './components/Basic';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Basic />, document.getElementById('root'));

registerServiceWorker();
