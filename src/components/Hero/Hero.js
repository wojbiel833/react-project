import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imgSrc} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imgSrc: PropTypes.string,
};

export default Hero;
