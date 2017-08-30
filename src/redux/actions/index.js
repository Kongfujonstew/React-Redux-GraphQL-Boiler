import { LOGIN, LOGOUT } from './actions';


export const login = (state, action) => {
  return {
    type: LOGIN
  }
};

export const logout = (state, action) => {
  return {
    type: LOGOUT
  }
};