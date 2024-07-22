import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <Link to="/faculty-details">Fill Faculty Details</Link>
            <Link to="/display-faculty-details">Display Faculty Details</Link>
        </div>
    );
};

export default Dashboard;