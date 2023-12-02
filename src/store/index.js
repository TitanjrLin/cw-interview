import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const isProduction = import.meta.env.PROD;

// eslint-disable-next-line
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  reduxThunk,
];

if (!isProduction) {
  const logger = createLogger({
    collapsed: true,
  });
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  composeEnhancer(
    applyMiddleware(...middlewares),
  ),
);

export default store;
