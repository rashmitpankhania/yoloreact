import React from 'react';
import { PropTypes } from 'prop-types';

const StartTestComponent = ({ match }) => (
  <div>
place holder of StartTestComponent
    {' '}
    {match.params.name}
  </div>
);

StartTestComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
export default StartTestComponent;
