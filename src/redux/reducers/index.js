import * as reducers from './reducers';

const defaultState = {
  loggedIn: false,
  error: '',
  num: 6
};


export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN' :
      return reducers.login(state, action);
    case 'LOGOUT' :
      return reducers.logout(state, action);
    case 'INCREMENTNUMBER' :
      return reducers.incrementNumber(state, action);
    default:
      return state;
  };
};


// export default function (state = {
//   isDeleting: false,
//   error: '',
// }, action) {
//   switch (action.type) {
//     case 'DELETE_PAGE_PENDING':
//       return {
//         isDeleting: true,
//       };
//     case 'DELETE_PAGE_REJECTED':
//       return {
//         isDeleting: false,
//         error: action.payload.response.statusText,
//       };
//     case 'DELETE_PAGE_FULFILLED':
//       return {
//         isDeleting: false,
//       };
//     default:
//       return state;
//   }
// }