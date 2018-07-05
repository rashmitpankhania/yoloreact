import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
