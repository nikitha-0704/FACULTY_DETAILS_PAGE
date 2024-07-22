import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const BasicDetailsForm = ({ initialData = {}, onSave }) => {
    const [formData, setFormData] = useState(initialData);
    const [editable, setEditable] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveClick = () => {
        console.log('Saving Basic Details:', formData);

        // Example API call to save data (uncomment and configure as needed)
        /*
        fetch('/api/saveBasicDetails', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                console.log('Basic details saved successfully!');
                navigate('/dashboard'); // Redirect to dashboard after saving
            } else {
                console.error('Failed to save basic details:', response.statusText);
            }
        }).catch(error => {
            console.error('Error saving basic details:', error);
        });
        */

        // Simulate redirection after saving (remove when using actual API call)
        navigate('/dashboard');
    };

    const handleUpdateClick = () => {
        setEditable(true); // Enable editing
    };

    return (
        <div className="section-container">
            <h3 className="section-heading">Basic Details</h3>
            <div className="section-form">
                <label>Name: <input type="text" name="name" value={formData.name || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Age: <input type="text" name="age" value={formData.age || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Date of Birth: <input type="date" name="dateOfBirth" value={formData.dateOfBirth || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Marital Status: <input type="text" name="maritalStatus" value={formData.maritalStatus || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>PAN: <input type="text" name="PAN" value={formData.PAN || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Aadhar ID: <input type="text" name="AadharID" value={formData.AadharID || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Father's Name: <input type="text" name="fatherName" value={formData.fatherName || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Mother's Name: <input type="text" name="motherName" value={formData.motherName || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Nationality: <input type="text" name="nationality" value={formData.nationality || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Mother Tongue: <input type="text" name="motherTongue" value={formData.motherTongue || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Religion: <input type="text" name="religion" value={formData.religion || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Caste: <input type="text" name="caste" value={formData.caste || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Blood Group: <input type="text" name="bloodGroup" value={formData.bloodGroup || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Current Address: <input type="text" name="currentAddress" value={formData.currentAddress || ''} onChange={handleChange} disabled={!editable} /></label><br />
                <label>Permanent Address: <input type="text" name="permanentAddress" value={formData.permanentAddress || ''} onChange={handleChange} disabled={!editable} /></label><br />
                {!editable && <button type="button" onClick={handleUpdateClick}>Update Details</button>}
                {editable && <button type="button" onClick={handleSaveClick}>Save Details</button>}
            </div>
        </div>
    );
};

export default BasicDetailsForm;
