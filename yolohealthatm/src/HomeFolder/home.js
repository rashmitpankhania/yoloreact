import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


const Home = () => (
  <div>
    <div>
      <HomeMenu name="consult" />
    </div>
    <div>
      <HomeMenu name="checkup" />
    </div>
    <div>
      <HomeMenu name="history" />
    </div>
  </div>
);

const HomeMenu = (props) => {
  const {
    name,
  } = props;
  return (
    <div>
      <Link to={`/${name}`}>
        {name}
      </Link>
    </div>);
};

const HomeButton = () => (
  <Link to="/">
HomeButton
  </Link>
);

HomeMenu.propTypes = {
  name: PropTypes.string.isRequired,
};

export {
  Home,
  HomeButton,
  HomeMenu,
};
