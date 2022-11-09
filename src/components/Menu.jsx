import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/meetings">Meetings</Link>
            </div>
        );
    }
}
