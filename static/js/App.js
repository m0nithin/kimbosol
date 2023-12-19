import React, {
    useState
} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import './styles/App.scss';
import Home from "./pages/Home";
import {
    Analytics
} from '@vercel/analytics/react';

export default function App() {
    const [accounts, setAccounts] = useState([]);

    return ( <
        Router >
        <
        main className = "overlay" >
        <
        section className = "App" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home accounts = {
                accounts
            }
            setAccounts = {
                setAccounts
            }
            />} / >
            <
            /Routes> <
            Analytics mode = {
                'production'
            }
            debug = {
                false
            }
            /> <
            /section> <
            div id = "animatedBackground" > < /div>

            <
            /main> <
            /Router>
        );
    }