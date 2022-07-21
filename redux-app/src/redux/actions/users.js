import * as type from "../types";

export function getUsers(user) {
  return {
    type: type.GET_USERS_REQUESTED,
  };
}
