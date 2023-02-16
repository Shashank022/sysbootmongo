import React from 'react'
import Events from "./Events";
import Teams from "./Teams";
import Tasks from "./Tasks";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function SideMenu() {
    return (
        <Router>
            <div className="App">
                <ul className="App-header">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/teams">Teams</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path='/events' element={< Events />}></Route>
                    <Route exact path='/events' element={< Events />}></Route>
                    <Route exact path='/teams' element={< Teams />}></Route>
                    <Route exact path='/tasks' element={< Tasks />}></Route>
                </Routes>
            </div>
        </Router>
    )
}
