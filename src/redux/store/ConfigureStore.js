import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import MonitorReducerEnhancer from '../enhancers/MonitorReducerEnhancer';
import Logger from '../middleware/Logger';
import RootReducer from '../reducers';

export default function configureStore(preloadedState) {
    const middleware = [Logger, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleware);

    const enhancers = [middlewareEnhancer, MonitorReducerEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(RootReducer, preloadedState, composedEnhancers);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(RootReducer))
    }

    return store;
}
