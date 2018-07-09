import React from 'react';
import { PropTypes } from 'prop-types';
  


const CheckUpMenu = (props) => {
  const {
    name,
    onPress,
  } = props;
  return (
    <div className="col-md-3" onClick={() => onPress()} role="presentation" onKeyPress={() => onPress()}>
      <div className="testCard">

      {name}
      </div>
    </div>
  );
};

CheckUpMenu.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,

};
export default CheckUpMenu;
