import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';

const RoutedApp = () => (
    <BrowserRouter>
    <Switch>
        <Route path='/' component={App}/>
    </Switch>
    </BrowserRouter>
);
ReactDOM.render(<RoutedApp />, document.getElementById('root'));
registerServiceWorker();
