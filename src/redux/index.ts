import { combineReducers } from 'redux';

import counter, {CountersState} from './counter/reducer';

// Add more
const appReducer = combineReducers({
    counter
});

// Setup root reducer
const rootReducer = (state, action) => {
    const newState = (action.type === 'RESET') ? undefined : state;
    return appReducer(newState, action);
};

export default rootReducer;


export interface RootState {
    counter: CountersState;
}