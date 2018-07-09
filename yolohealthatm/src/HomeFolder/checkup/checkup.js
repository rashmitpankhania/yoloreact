import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import CheckUpMenu from './checkupmenu';
import './checkup.css';

class CheckUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testName: 'basic',
      tests: ['basicA', 'basicB', 'basicC'],
    };
    this.checkUpEvent = this.checkUpEvent.bind(this);
    this.renderCheckup = this.renderCheckup.bind(this);
  }

  checkUpEvent(name) {
    const currentTestName = name;
    let currentTests;
    if (currentTestName === 'eye') {
      currentTests = ['eyeA', 'eyeB', 'eyeC'];
    } else if (currentTestName === 'diabetes') {
      currentTests = ['diabetesA', 'diabetesB', 'diabetesC'];
    } else if (currentTestName === 'heart') {
      currentTests = ['heartA', 'heartB', 'heartC'];
    } else if (currentTestName === 'blood') {
      currentTests = ['bloodA', 'bloodB', 'bloodC'];
    } else if (currentTestName === 'skin') {
      currentTests = ['skinA', 'skinB', 'skinC'];
    } else if (currentTestName === 'ent') {
      currentTests = ['entA', 'entB', 'entC'];
    } else if (currentTestName === 'urine') {
      currentTests = ['urineA', 'urineB', 'urineC'];
    } else {
      currentTests = ['basicA', 'basicB', 'basicC'];
    }
    this.setState({
      testName: currentTestName,
      tests: currentTests,
    });
  }

  renderCheckup(name) {
    return <CheckUpMenu name={name} onPress={() => this.checkUpEvent(name)} />;
  }

  render() {
    const {
      testName,
      tests,
    } = this.state;
    const {
      match,
    } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          {this.renderCheckup('basic')}
          {this.renderCheckup('diabetes')}
          {this.renderCheckup('heart')}
          {this.renderCheckup('blood')}
          {this.renderCheckup('skin')}
          {this.renderCheckup('ent')}
          {this.renderCheckup('urine')}
          {this.renderCheckup('eye')}
        </div>
        <div  className="col-md-12">
          {testName}
          {tests}
          <div>
          <Link to={{ pathname: `${match.url}/${testName}`, state: { tests } }}>
              Start
        </Link>
           </div> 
         
        </div>
       
      </div>
    );
  }
}

CheckUp.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default CheckUp;
