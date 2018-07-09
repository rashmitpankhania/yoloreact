import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class StartCheckUpTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTest: props.location.state.tests[0],
    };
  }

  testHandler(name) {
    this.setState({
      currentTest: name,
    });
  }

  render() {
    const {
      location: {
        state: {
          tests,
        },
      },
      match: {
        params: {
          name,
        },
      },
    } = this.props;

    const {
      currentTest,
    } = this.state;

    const testArray = tests.map(test => (
      <div role="presentation" onClick={() => this.testHandler(test)} onKeyPress={() => this.testHandler(test)}>
        {test}
      </div>
    ));
    return (
      <div>
        <title>
          {name}
        </title>
        {testArray}
        {currentTest}
      </div>
    );
  }
}

StartCheckUpTest.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      tests: PropTypes.node,
    }).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.node,
    }).isRequired,
  }).isRequired,
  tests: PropTypes.array.isRequired,
};
export default StartCheckUpTest;
