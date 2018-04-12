import * as UserActions from '../actions/user.actions';
import {User} from "../models/user.model";

export type Action = UserActions.All;

/// Default app state
const defaultState: User = new User();

/// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData)
};

/// Reducer function
export function userReducer(state: User = defaultState, action: Action) {

  console.log('userReducer', JSON.stringify(state), JSON.stringify(action));

  switch (action.type) {
    case UserActions.UPDATE_USER:
      return newState(state, new User(action.payload));
    default:
      return state;
  }
}
