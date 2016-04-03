import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import App from '#app';
import ProcductDetailsPage from '#product-details-page';

import './assets/styles.css';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);

function catalogReducer(catalog = {}, action) {
    switch (action.type) {
        case 'VIEW_SELECT':
            return {
                ...catalog,
                selectedView: action.view
            };
        case 'DATA_LOADED':
            return {
                ...catalog,
                data: action.data
            };
        case 'DATA_SEARCH':
            return {
                ...catalog,
                searchPhrase: action.text
            };
        default:
            return catalog;
    }
}

function rootReducer(state = {}, action) {
    return {
        ...state,
        catalog: catalogReducer(state.catalog, action),
        routing: routerReducer(state.routing, action)
    };
}

const devToolsExtension = window.devToolsExtension ?
                            window.devToolsExtension() : fn => fn;

const store = createStore(
    rootReducer,
    {
        catalog: {
            data: null,
            views: [ 'grid', 'list' ],
            selectedView: 'grid',
            searchPhrase: ''
        }
    },
    compose(
      applyMiddleware(
          thunkMiddleware,
          routerMiddleware(browserHistory),
      ),
      devToolsExtension
    )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
            <Route path="/pdp/:id" component={ProcductDetailsPage}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
