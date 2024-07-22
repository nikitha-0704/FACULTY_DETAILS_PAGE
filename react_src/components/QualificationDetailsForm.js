// QualificationDetailsForm.jsx

import React, { useState } from 'react';
import '../styles/styles.css'; // Import your CSS file
import QualificationForm from './QualificationForm';

const QualificationDetailsForm = ({ onSave }) => {
    const [qualifications, setQualifications] = useState([]);

    const addQualification = () => {
        setQualifications(prevState => [
            ...prevState,
            { qualification: '', specialization: '', boardUniversity: '', divisionClass: '', yearOfPassing: '', percentage: '' }
        ]);
    };

    const handleQualificationChange = (index, newQualification) => {
        setQualifications(prevState => {
            const updatedQualifications = [...prevState];
            updatedQualifications[index] = newQualification;
            return updatedQualifications;
        });
    };

    const removeQualification = (index) => {
        setQualifications(prevState => {
            const updatedQualifications = [...prevState];
            updatedQualifications.splice(index, 1);
            return updatedQualifications;
        });
    };

    const handleSubmit = () => {
        onSave(qualifications); // Call onSave function passed from DashboardPage
    };

    return (
        <div className="section-container">
            <h3 className="section-heading">Qualification Details</h3>
            {qualifications.map((qualification, index) => (
                <QualificationForm
                    key={index}
                    index={index}
                    qualification={qualification}
                    onChange={handleQualificationChange}
                    onRemove={removeQualification}
                />
            ))}
            <button type="button" onClick={addQualification}>Add Qualification</button>
            <button type="button" onClick={handleSubmit}>Save Qualifications</button>
        </div>
    );
};

export default QualificationDetailsForm;
