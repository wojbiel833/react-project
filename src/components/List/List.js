import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
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
    console.log('Props', this.props);
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSrc={this.props.src} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column title="Column 1" />
          <Column title="Column 2" />
          <Column title="Column 3" />
        </div>
      </section>
    );
  }
}

export default List;
