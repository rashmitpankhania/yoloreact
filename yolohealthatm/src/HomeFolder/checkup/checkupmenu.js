import React from 'react';
import { PropTypes } from 'prop-types';


const CheckUpMenu = (props) => {
  const {
    name,
    onPress,
  } = props;
  return (
    <div onClick={() => onPress()} role="presentation" onKeyPress={() => onPress()}>
      {name}
    </div>
  );
};

CheckUpMenu.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,

};
export default CheckUpMenu;
