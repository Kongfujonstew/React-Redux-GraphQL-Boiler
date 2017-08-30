export const login = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loggedIn: true});
  return newState;
}

export const logout = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loggedIn: false});
  return newState;
}

