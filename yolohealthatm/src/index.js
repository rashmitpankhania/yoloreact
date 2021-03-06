import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Consult from './HomeFolder/consult';
import CheckUp from './HomeFolder/checkup/checkup';
import StartTestComponent from './HomeFolder/checkup/starttest';
import PatientHistory from './HomeFolder/patienthistory';
import registerServiceWorker from './registerServiceWorker';
import { HomeButton, Home } from './HomeFolder/home';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
            yolohealth
    </header>
    <main>
      <Switch>
        <Route path="/checkup/:name" component={StartTestComponent} />
        <Route path="/checkup" component={CheckUp} />
        <Route path="/history" component={PatientHistory} />
        <Route path="/consult" component={Consult} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
    <footer>
      <HomeButton />
    </footer>
  </div>
);

const RoutedApp = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>

);
ReactDOM.render(<RoutedApp />, document.getElementById('root'));
registerServiceWorker();
