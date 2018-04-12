import {Action} from "@ngrx/store";
import {IUser} from "../models/user.model";

export const UPDATE_USER = '[USER] Update';

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: IUser) {}
}

export type All
  = UpdateUser
