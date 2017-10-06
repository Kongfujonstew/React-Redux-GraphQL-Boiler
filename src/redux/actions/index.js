import { LOGIN, LOGOUT, INCREMENTNUMBER } from './actions';


export const login = (state, action) => {
  return {
    type: LOGIN
  }
};

export const logout = (state, action) => {
  return {
    type: LOGOUT
  };
};

export const incrementNumber = (state, action) => {
  return {
    type: INCREMENTNUMBER
  };
};
