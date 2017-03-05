import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore, renderDevTools } from '../utils/devTools';
import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';
import { addFriend, deleteFriend, starFriend } from '../actions/index';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store = {store}>
                    { () => <FriendListApp/> }
                </Provider>
                { renderDevTools(store) }
            </div>
        );
    }
}

/*store.dispatch(addFriend('Barack Obama'));
store.dispatch(deleteFriend(1));
store.dispatch(starFriend(4));*/