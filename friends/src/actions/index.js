// we'll need axios
import axios from "axios";
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_ERR = 'FRIENDS_ERR'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const fetchFriends = () => dispatch => {
     const promise = axios.get('/api/friends')
    dispatch({type: FETCHING_FRIENDS})
    promise
    .then(({data}) => {
        dispatch({type: FRIENDS_SUCCESS, payload: data.results})
    })
    .catch(err => {
        dispatch({type: FRIENDS_ERR, payload: err})
    })
}