import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import Consult from "./HomeFolder/consult";
import { CheckUp } from "./HomeFolder/checkup";
import { PatientHistory } from "./HomeFolder/patienthistory";
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { HomeButton } from './HomeFolder/home';

const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            yolohealth
      </header>
        <main>
            <Route path='/checkup' component={CheckUp} />
            <Route path='/history' component={PatientHistory} />
            <Route path='/consult' component={Consult} />
            <Route path='/' component={App} />
        </main>
        <footer>
            <HomeButton />
        </footer>
    </div>
)

const RoutedApp = () => (
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>

);
ReactDOM.render(<RoutedApp />, document.getElementById('root'));
registerServiceWorker();
