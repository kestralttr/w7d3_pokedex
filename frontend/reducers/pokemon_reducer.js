import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const _defaultState = {};

const PokemonReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    default:
      return state;
  }
};

export default PokemonReducer;
