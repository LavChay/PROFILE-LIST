// import { PROFILES_LIST } from '../actions/actionTypes';

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PROFILES_LIST':
      return {
        ...state,
        profiles: action.payload
      }
    case 'PROFILES_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default profileReducer;