import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import Consult from "./HomeFolder/consult";
import { CheckUp } from "./HomeFolder/checkup";
import { PatientHistory } from "./HomeFolder/patienthistory";
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

const RoutedApp = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/checkup' component={CheckUp} />
            <Route path='/history' component={PatientHistory} />
            <Route path='/consult' component={Consult} />
            <Route path='/' component={App} />
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(<RoutedApp />, document.getElementById('root'));
registerServiceWorker();
