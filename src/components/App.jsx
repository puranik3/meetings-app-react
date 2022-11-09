import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './Menu';
import Login from './Login';
import Register from './Register';
import Calendar from './Calendar';
import Meetings from './Meetings';

export default function App ( props ) {
    return (
        <>
            <Menu />
            {/* create and add navbar */}
            <Route path="/">
                <Menu />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/calendar">
                <Calendar />
            </Route>
            <Route path="/meetings">
                <Meetings />
            </Route>
        </>
    );
}

