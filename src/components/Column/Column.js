import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from './Icon.js';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    src: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  };
  static defaultProps = {
    children: <p>I can do all the things!</p>,
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { icon, cards, addCard } = this.props;
    console.log(this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.title}
          <span className={icon}>{Icon(this.props)}</span>
        </h3>
        <div className={styles.columns}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.columns}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;
