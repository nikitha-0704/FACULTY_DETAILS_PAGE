// AppointmentDetailsForm.jsx

import React, { useState } from 'react';
import '../styles/styles.css'; // Import your CSS file

const AppointmentDetailsForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        department: '',
        designation: '',
        payLevel: '',
        payCell: '',
        dateOfJoining: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveClick = () => {
        onSave(formData); // Call onSave function passed from DashboardPage
    };

    return (
        <div className="section-container">
            <h3 className="section-heading">Appointment Details</h3>
            <div className="section-form">
                <label>Department: <input type="text" name="department" value={formData.department} onChange={handleChange} /></label><br />
                <label>Designation: <input type="text" name="designation" value={formData.designation} onChange={handleChange} /></label><br />
                <label>Pay Level: <input type="text" name="payLevel" value={formData.payLevel} onChange={handleChange} /></label><br />
                <label>Pay Cell: <input type="text" name="payCell" value={formData.payCell} onChange={handleChange} /></label><br />
                <label>Date of Joining: <input type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} /></label><br />
                <button type="button" onClick={handleSaveClick}>Save Appointment Details</button>
            </div>
        </div>
    );
};

export default AppointmentDetailsForm;
