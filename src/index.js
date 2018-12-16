import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/index';
import rootSaga from './redux/sagas/index';

// // Create the rootSaga generator function
// function* rootSaga() {

// }

// // Used to store projects returned from the server
// const projects = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_PROJECTS':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// // Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
// const tags = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_TAGS':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
   rootReducer,
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
