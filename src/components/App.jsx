import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Calendar from './Calendar';
import Meetings from './Meetings';

export default function App ( props ) {
    return (
        <>
            {/* create and add navbar */}
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

