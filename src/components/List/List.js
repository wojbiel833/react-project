import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
// import App from '../App/App.js';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';

class List extends React.Component {
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
        <Hero titleText={this.props.title}>
          <div className={styles.description}>{this.props.children}</div>
          <img className={styles.image} imgSrc={this.props.src} />
          <div className={styles.component}>
            <Column title="Column 1" />
            <Column title="Column 2" />
            <Column title="Column 3" />
          </div>
        </Hero>
      </section>
    );
  }
}

export default List;
