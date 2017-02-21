import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import {Provider} from "react-redux";
// import store from './store';
import { createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
