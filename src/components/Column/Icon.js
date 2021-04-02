import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => <i className={`fas fa-${props.icon}`}></i>;

Icon.propTypes = {
  icon: PropTypes.any,
};

export default Icon;
