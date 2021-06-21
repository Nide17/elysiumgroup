import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// We'll be using combineForms to create the reducer that contains all of your modelReducers, and a single formReducer under the 'form' key.
// import { combineForms, createForms } from 'react-redux-form';

import thunk from 'redux-thunk';
import logger from 'redux-logger';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;