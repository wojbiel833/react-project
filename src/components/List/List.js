import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import Creator from '../Creator/Creator.js';
// import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    src: PropTypes.string,
    image: PropTypes.any,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    const { title, image, description, columns, addColumn } = this.props;
    // console.log('Props', this.props);
    // console.log('State', this.state);
    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} imgSrc={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
            {/* <Card title={settings.cardCreatorText} /> */}
          </div>
        </section>
      </Container>
    );
    // console.log('State', this.state);
  }
}

export default List;
