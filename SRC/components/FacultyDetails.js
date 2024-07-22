import React, { useState } from 'react';
import axios from '../services/axios';

const FacultyDetails = () => {
    const [basicDetails, setBasicDetails] = useState({});
    const [professionalDetails, setProfessionalDetails] = useState({});
    const [qualifications, setQualifications] = useState([]);
    const [appointment, setAppointment] = useState({});

    const handleChange = (e, setState) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleQualificationChange = (e, index) => {
        const { name, value } = e.target;
        setQualifications(prevState => {
            const updated = [...prevState];
            updated[index] = { ...updated[index], [name]: value };
            return updated;
        });
    };

    const addQualification = () => {
        setQualifications([...qualifications, {}]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/faculty/basic-details', basicDetails);
            await axios.post('/api/faculty/professional-details', professionalDetails);
            await axios.post('/api/faculty/qualification-details', qualifications);
            await axios.post('/api/faculty/appointment-details', appointment);
            alert('Details saved successfully!');
        } catch (error) {
            console.error('There was an error saving the details!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Basic Details</h2>
            <input type="text" name="name" placeholder="Name" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="number" name="age" placeholder="Age" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="maritalStatus" placeholder="Marital Status" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="pan" placeholder="PAN" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="aadharId" placeholder="Aadhar ID" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="fatherName" placeholder="Father's Name" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="motherName" placeholder="Mother's Name" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="nationality" placeholder="Nationality" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="motherTongue" placeholder="Mother Tongue" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="religion" placeholder="Religion" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="caste" placeholder="Caste" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="bloodGroup" placeholder="Blood Group" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="currentAddress" placeholder="Current Address" onChange={(e) => handleChange(e, setBasicDetails)} />
            <input type="text" name="permanentAddress" placeholder="Permanent Address" onChange={(e) => handleChange(e, setBasicDetails)} />
            
            <h2>Professional Details</h2>
            <input type="text" name="areaOfResearch" placeholder="Area of Research" onChange={(e) => handleChange(e, setProfessionalDetails)} />
            <input type="number" name="experienceAtNITC" placeholder="Experience at NITC" onChange={(e) => handleChange(e, setProfessionalDetails)} />
            <input type="number" name="teachingExperiencePrior" placeholder="Teaching Experience Prior to NITC" onChange={(e) => handleChange(e, setProfessionalDetails)} />
            <input type="number" name="industryExperiencePrior" placeholder="Industry Experience Prior to NITC" onChange={(e) => handleChange(e, setProfessionalDetails)} />

            <h2>Qualification Details</h2>
            {qualifications.map((qualification, index) => (
                <div key={index}>
                    <input type="text" name="qualification" placeholder="Qualification" onChange={(e) => handleQualificationChange(e, index)} />
                    <input type="text" name="specialization" placeholder="Specialization" onChange={(e) => handleQualificationChange(e, index)} />
                    <input type="text" name="boardUniversity" placeholder="Board/University" onChange={(e) => handleQualificationChange(e, index)} />
                    <input type="text" name="divisionClass" placeholder="Division/Class" onChange={(e) => handleQualificationChange(e, index)} />
                    <input type="text" name="yearOfPassing" placeholder="Year of Passing" onChange={(e) => handleQualificationChange(e, index)} />
                    <input type="text" name="percentageOrCGPA" placeholder="Percentage/CGPA" onChange={(e) => handleQualificationChange(e, index)} />
                </div>
            ))}
            <button type="button" onClick={addQualification}>Add Qualification</button>

            <h2>Appointment Details</h2>
            <input type="text" name="department" placeholder="Department" onChange={(e) => handleChange(e, setAppointment)} />
            <input type="text" name="designation" placeholder="Designation" onChange={(e) => handleChange(e, setAppointment)} />
            <input type="text" name="payLevel" placeholder="Pay Level" onChange={(e) => handleChange(e, setAppointment)} />
            <input type="text" name="payCell" placeholder="Pay Cell" onChange={(e) => handleChange(e, setAppointment)} />
            <input type="date" name="dateOfJoining" placeholder="Date of Joining" onChange={(e) => handleChange(e, setAppointment)} />

            <button type="submit">Save</button>
        </form>
    );
};

export default FacultyDetails;
