import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import ReduxPromise from 'redux-promise';

const defaultState = {
    // books: books,
    // activeBook: activeBook
};

const middleware = applyMiddleware(ReduxPromise())

const store = createStore(rootReducer, middleware);

export default store;
