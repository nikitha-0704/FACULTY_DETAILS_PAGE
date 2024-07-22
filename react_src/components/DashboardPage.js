import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/basic-details">Basic Details</Link>
          </li>
          <li>
            <Link to="/professional-details">Professional Details</Link>
          </li>
          <li>
            <Link to="/qualification-details">Qualification Details</Link>
          </li>
          <li>
            <Link to="/appointment-details">Appointment Details</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardPage;
