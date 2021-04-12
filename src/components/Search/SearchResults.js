import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Icon from './Icon.js';
import Container from '../Container/Container';
import ListLink from '../ListLink/ListLink';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    src: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  };
  // static defaultProps = {
  //   children: <p>I can do all the things!</p>,
  //   icon: settings.defaultColumnIcon,
  // };

  render() {
    const { icon } = this.props;
    console.log(this.props);
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            {this.props.title}
            <span className={icon}>{Icon(this.props)}</span>
          </h3>
          <div className={styles.columns}>
            <ListLink />
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
