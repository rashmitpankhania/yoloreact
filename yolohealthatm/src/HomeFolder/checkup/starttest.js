import React from 'react';
import { Route } from 'react-router-dom';
import StartTestComponent from './starttestcomponent';

const StartTest = match => (
  <div>
    <Route path={`${match.url}/:name`} component={StartTestComponent} />
  </div>
);


// StartTest.propTypes = { name: PropTypes.string.isRequired };
export default StartTest;
