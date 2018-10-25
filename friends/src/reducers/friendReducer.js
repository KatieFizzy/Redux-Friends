import { FETCHING_FRIENDS, FRIENDS_SUCCESS, FRIENDS_ERR } from '../actions';
const initialState = {
  friendList: [],
  isFetching: false,
  error: null
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCHING_FRIENDS: 
      return {...state, isFetching: true}
      case FRIENDS_SUCCESS: 
      return {...state, isFetching: false, friendList: [...state.characters, ...action.payload ]}
      case FRIENDS_ERR: 
      return {...state, isFetching: false, error: action.payload}
      default:
      return state;
  }
};
