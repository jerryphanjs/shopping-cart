import { SHOW_PRODUCTS } from '../actions';

const initialState = {
  products: [],
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_PRODUCTS: 
      return {
        ...state,
        products: action.payload
      }
    default:
    return state;
  }
}

export default rootReducer;