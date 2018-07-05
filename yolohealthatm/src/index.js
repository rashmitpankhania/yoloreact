import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutedApp from './App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
registerServiceWorker();
