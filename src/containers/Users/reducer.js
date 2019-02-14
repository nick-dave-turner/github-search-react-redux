// @flow
import * as actionTypes from "./constants";

type User = {
  id: number,
  ...mixed
};

type State = {
  data: Array<User>
};

type Actions = {
  type: string,
  payload: Array<mixed>
};

const initialState = {
  data: [],
  loading: false,
  error: false
};

const usersReducer = (state: State = initialState, actions: Actions) => {
  switch (actions.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: actions.payload,
        loading: false,
        error: false
      };

    case actionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };

    case actionTypes.DELETE_USER: {
      const data: Array<User> = state.data.filter(
        (user: User) => user.id !== actions.payload
      );

      return {
        ...state,
        data
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
