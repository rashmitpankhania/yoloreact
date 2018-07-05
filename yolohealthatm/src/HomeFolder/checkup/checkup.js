import React, { Component } from 'react';
import CheckUpMenu from './checkupmenu';

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
    console.log(currentTestName);
    console.log(currentTests);
    this.setState = {
      testName: currentTestName,
      tests: currentTests,
    };
  }

  renderCheckup(name) {
    return <CheckUpMenu name={name} onPress={this.checkUpEvent} />;
  }

  render() {
    const {
      testName,
      tests,
    } = this.state;
    return (
      <div>
        <div>
          {this.renderCheckup('basic')}
          {this.renderCheckup('diabetes')}
          {this.renderCheckup('heart')}
          {this.renderCheckup('blood')}
          {this.renderCheckup('skin')}
          {this.renderCheckup('ent')}
          {this.renderCheckup('urine')}
          {this.renderCheckup('eye')}
        </div>
        <div>
          {testName}
          {tests}
        </div>
      </div>
    );
  }
}


export default CheckUp;
