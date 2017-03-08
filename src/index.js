import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, hashHistory, Redirect } from 'react-router'
import personlist from './reducers/personlist'
import { reducer as formReducer } from 'redux-form'
import Form from './Form'
import Show from './Show'


const reducers = {
  personlist,
  form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

render(
  <Provider store={store}>
  <Router history={hashHistory}>

            <Route path="/users/create" component={Form}/>
            <Redirect from="/" to="/users/create" />
            <Route path="/users/list" component={Show}/>
              </Router>
  </Provider>,
  document.getElementById('root')
);

