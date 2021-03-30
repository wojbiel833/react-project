import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    src: PropTypes.string,
    columns: PropTypes.array,
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };

  addColumn(title) {
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
    // console.log('Props', this.props);
    // console.log('State', this.state);
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSrc={this.props.src} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={title => {
              this.addColumn(title);
            }}
          />
          <Card title={settings.cardCreatorText} />
        </div>
      </section>
    );
    console.log('State', this.state);
  }
}

export default List;
