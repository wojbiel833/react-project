import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'Add new item',
  };

  state = {
    value: '',
    visibleButtons: false,
  };

  render() {
    // console.log('Props', this.props);
    // console.log('State', this.state);
    return <div className={styles.component}></div>;
    // console.log('State', this.state);
  }
}

export default Card;
