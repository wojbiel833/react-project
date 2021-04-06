import shortid from 'shortid';

// selectors
export const getSearchString = state => ({
  searchString: state.searchString,
});

export const countVisibleCards = ({ cards }) => cards.length;
export const countAllCards = ({ cards, searchString }) =>
  cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('ADD_SEARCH');

// action creators
export const createActionSearch = payload => ({
  payload: { ...payload, id: shortid.generate() },
  type: CHANGE,
});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
