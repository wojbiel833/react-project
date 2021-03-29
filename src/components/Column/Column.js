import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    src: PropTypes.string,
  };
  static defaultProps = {
    //setting default on {this.props.children}
    children: <p>I can do all the things!</p>,
  };
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>This is a header!</h3>
      </section>
    );
  }
}

export default Column;
