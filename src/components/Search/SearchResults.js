import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Icon from './../Column/Icon';
import Container from '../Container/Container';
import { settings } from './../../data/dataStore';
import Card from './../Card/Card';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };

  render() {
    const { cards } = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            Search results
            <span className={styles.icon}>
              <Icon name={settings.search.icon} />
            </span>
          </h3>
          <div className={styles.columns}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
