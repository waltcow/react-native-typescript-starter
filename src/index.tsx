import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './containers/Counter';
import rootReducer from './redux';

const store = compose()(createStore)(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}