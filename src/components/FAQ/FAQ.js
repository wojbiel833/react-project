import React from 'react';
import Container from '../Container/Container';
import Hero from './../Hero/Hero';
import PropTypes from 'prop-types';
import { faq } from './../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} imgSrc={faq.imgSrc} />
    <h2>{faq.title}</h2>
    <p>{faq.content}</p>
  </Container>
);

FAQ.propTypes = {
  titleText: PropTypes.node,
  imgSrc: PropTypes.string,
};

export default FAQ;
