import reducer from './reducer';
// import { createStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import { applyMiddleware } from 'redux';
const store = configureStore({
    reducer: reducer,

    middleware: [thunk],
});
export default store;
