import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import { Router } from './Router';



console.log('store on creation at main: ', store.getState());

ReactDOM.render(<Router />, document.getElementById('main'));







// const rootEl = document.getElementById('main');
// const render = Component =>
//   ReactDOM.render(
//     <AppContainer>
//       <Router />
//     </AppContainer>,
//     rootEl
//   );

// render(Router);
// if (module.hot) module.hot.accept('./Router', () => render(Router));

