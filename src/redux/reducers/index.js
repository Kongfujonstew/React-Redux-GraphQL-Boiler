export default function (state = {
  loggedIn: false,
  error: '',
  number: 7
}, action) {
  switch (action.type) {
    case 'LOGIN' :
      return {
        loggedIn: true
      };
    case 'LOGOUT' :
      return {
        loggedIn: false
      };
    default:
      return state;
  }
}


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