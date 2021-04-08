import React from 'react';
import styles from './Container.scss';

class Container extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.component}>
        <p>NEW CONTAINER</p>
      </div>
    );
  }
}

export default Container;
