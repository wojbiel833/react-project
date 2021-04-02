import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../App/ColumnContainer.js';
// import Creator from '../Creator/Creator.js';
// import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    src: PropTypes.string,
    image: PropTypes.any,
    columns: PropTypes.array,
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    const { title, image, description, columns } = this.props;
    // console.log('Props', this.props);
    // console.log('State', this.state);
    return (
      <section className={styles.component}>
        <Hero titleText={title} imgSrc={image} />
        <div className={styles.description}>{ReactHtmlParser(description)}</div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/* <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={title => {
              this.addColumn(title);
            }}
          />
          <Card title={settings.cardCreatorText} />
        </div> */}
      </section>
    );
    // console.log('State', this.state);
  }
}

export default List;
