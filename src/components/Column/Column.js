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
  };
  static defaultProps = {
    //setting default on {this.props.children}
    children: <p>I can do all the things!</p>,
  };
  state = {
    cards: this.props.cards || [],
    // icon: this.props.icon,
  };

  addCard(title) {
    this.setState(state => ({
      columns: [
        ...state.columns,
        {
          key: state.columns.length
            ? state.columns[state.columns.length - 1].key + 1
            : 0,
          title,
          icon: 'list-alt',
          cards: [],
        },
      ],
    }));
  }

  render() {
    console.log(this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.title}
          <span className={styles.icon}>{Icon(this.props)}</span>
        </h3>
        <div className={styles.components}>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <Creator
          text={settings.cardCreatorText}
          action={title => {
            this.addCard(title);
          }}
        />
      </section>
    );
  }
}

export default Column;
