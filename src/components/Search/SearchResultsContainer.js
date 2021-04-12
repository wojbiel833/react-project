import SearchResults from './SearchResults';
import { connect } from 'react-redux';
import { getCardsForSearch } from './../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

export default connect(mapStateToProps)(SearchResults);
