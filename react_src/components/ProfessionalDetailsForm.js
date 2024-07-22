// ProfessionalDetailsForm.jsx

import React, { useState } from 'react';
import '../styles/styles.css'; // Import your CSS file

const ProfessionalDetailsForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        areaOfResearch: '',
        experienceAtNITC: '',
        teachingExperiencePriorNITC: '',
        industryExperiencePriorNITC: ''
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
            <h3 className="section-heading">Professional Details</h3>
            <div className="section-form">
                <label>Area of Research: <input type="text" name="areaOfResearch" value={formData.areaOfResearch} onChange={handleChange} /></label><br />
                <label>Experience at NITC (years): <input type="text" name="experienceAtNITC" value={formData.experienceAtNITC} onChange={handleChange} /></label><br />
                <label>Teaching Experience Prior to NITC (years): <input type="text" name="teachingExperiencePriorNITC" value={formData.teachingExperiencePriorNITC} onChange={handleChange} /></label><br />
                <label>Industry Experience Prior to NITC (years): <input type="text" name="industryExperiencePriorNITC" value={formData.industryExperiencePriorNITC} onChange={handleChange} /></label><br />
                <button type="button" onClick={handleSaveClick}>Save Professional Details</button>
            </div>
        </div>
    );
};

export default ProfessionalDetailsForm;
