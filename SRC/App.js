import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './components/Dashboard';
import DisplayFacultyDetails from './components/DisplayFacultyDetails';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/faculty-details" component={DisplayFacultyDetails} />
                <Route path="/display-faculty-details" component={DisplayFacultyDetails} />
            </Switch>
        </Router>
    );
};

export default App;
