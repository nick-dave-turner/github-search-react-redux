// @flow
import { Dispatch } from "redux";
import * as actionTypes from "./constants";

export const fetchUsersRequest = () => ({
  type: actionTypes.FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (payload: Array<mixed>) => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload
});

export const fetchUsersFailure = () => ({
  type: actionTypes.FETCH_USERS_FAILURE
});

export const deleteUser = (payload: number) => ({
  type: actionTypes.DELETE_USER,
  payload
});

export const getUsers = (searchTerm: string) => (dispatch: Dispatch) => {
  dispatch(fetchUsersRequest());
  return fetch(
    `https://api.github.com/search/users?per_page=42&page=1&q=${searchTerm}`
  )
    .then(response => {
      if (!response.ok) fetchUsersFailure();
      return response.json();
    })
    .then(result => {
      dispatch(fetchUsersSuccess(result.items));
    })
    .catch(() => fetchUsersFailure());
};
