import React, { useEffect, useState } from 'react';
import axios from '../services/axios';

const DisplayFacultyDetails = () => {
    const [basicDetails, setBasicDetails] = useState({});
    const [professionalDetails, setProfessionalDetails] = useState({});
    const [qualifications, setQualifications] = useState([]);
    const [appointment, setAppointment] = useState({});
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const basicRes = await axios.get('/api/faculty/basic-details/1'); // Replace with dynamic ID
                const profRes = await axios.get('/api/faculty/professional-details/1'); // Replace with dynamic ID
                const qualRes = await axios.get('/api/faculty/qualification-details/1'); // Replace with dynamic ID
                const appointRes = await axios.get('/api/faculty/appointment-details/1'); // Replace with dynamic ID
                
                setBasicDetails(basicRes.data);
                setProfessionalDetails(profRes.data);
                setQualifications(qualRes.data);
                setAppointment(appointRes.data);
            } catch (error) {
                console.error('There was an error fetching the details!', error);
            }
        };

        fetchDetails();
    }, []);

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

    const handleSave = async () => {
        try {
            await axios.post('/api/faculty/basic-details', basicDetails);
            await axios.post('/api/faculty/professional-details', professionalDetails);
            await axios.post('/api/faculty/qualification-details', qualifications);
            await axios.post('/api/faculty/appointment-details', appointment);
            alert('Details updated successfully!');
            setEditMode(false);
        } catch (error) {
            console.error('There was an error updating the details!', error);
        }
    };

    return (
        <div>
            {editMode ? (
                <form>
                    <h2>Basic Details</h2>
                    <input type="text" name="name" value={basicDetails.name} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="number" name="age" value={basicDetails.age} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="date" name="dateOfBirth" value={basicDetails.dateOfBirth} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="maritalStatus" value={basicDetails.maritalStatus} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="pan" value={basicDetails.pan} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="aadharId" value={basicDetails.aadharId} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="fatherName" value={basicDetails.fatherName} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="motherName" value={basicDetails.motherName} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="nationality" value={basicDetails.nationality} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="motherTongue" value={basicDetails.motherTongue} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="religion" value={basicDetails.religion} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="caste" value={basicDetails.caste} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="bloodGroup" value={basicDetails.bloodGroup} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="currentAddress" value={basicDetails.currentAddress} onChange={(e) => handleChange(e, setBasicDetails)} />
                    <input type="text" name="permanentAddress" value={basicDetails.permanentAddress} onChange={(e) => handleChange(e, setBasicDetails)} />

                    <h2>Professional Details</h2>
                    <input type="text" name="areaOfResearch" value={professionalDetails.areaOfResearch} onChange={(e) => handleChange(e, setProfessionalDetails)} />
                    <input type="number" name="experienceAtNITC" value={professionalDetails.experienceAtNITC} onChange={(e) => handleChange(e, setProfessionalDetails)} />
                    <input type="number" name="teachingExperiencePrior" value={professionalDetails.teachingExperiencePrior} onChange={(e) => handleChange(e, setProfessionalDetails)} />
                    <input type="number" name="industryExperiencePrior" value={professionalDetails.industryExperiencePrior} onChange={(e) => handleChange(e, setProfessionalDetails)} />

                    <h2>Qualification Details</h2>
                    {qualifications.map((qualification, index) => (
                        <div key={index}>
                            <input type="text" name="qualification" value={qualification.qualification} onChange={(e) => handleQualificationChange(e, index)} />
                            <input type="text" name="specialization" value={qualification.specialization} onChange={(e) => handleQualificationChange(e, index)} />
                            <input type="text" name="boardUniversity" value={qualification.boardUniversity} onChange={(e) => handleQualificationChange(e, index)} />
                            <input type="text" name="divisionClass" value={qualification.divisionClass} onChange={(e) => handleQualificationChange(e, index)} />
                            <input type="text" name="yearOfPassing" value={qualification.yearOfPassing} onChange={(e) => handleQualificationChange(e, index)} />
                            <input type="text" name="percentageOrCGPA" value={qualification.percentageOrCGPA} onChange={(e) => handleQualificationChange(e, index)} />
                        </div>
                    ))}
                    <button type="button" onClick={() => setQualifications([...qualifications, {}])}>Add Qualification</button>

                    <h2>Appointment Details</h2>
                    <input type="text" name="department" value={appointment.department} onChange={(e) => handleChange(e, setAppointment)} />
                    <input type="text" name="designation" value={appointment.designation} onChange={(e) => handleChange(e, setAppointment)} />
                    <input type="text" name="payLevel" value={appointment.payLevel} onChange={(e) => handleChange(e, setAppointment)} />
                    <input type="text" name="payCell" value={appointment.payCell} onChange={(e) => handleChange(e, setAppointment)} />
                    <input type="date" name="dateOfJoining" value={appointment.dateOfJoining} onChange={(e) => handleChange(e, setAppointment)} />

                    <button type="button" onClick={handleSave}>Save</button>
                </form>
            ) : (
                <div>
                    <h2>Basic Details</h2>
                    <p>Name: {basicDetails.name}</p>
                    <p>Age: {basicDetails.age}</p>
                    <p>Date of Birth: {basicDetails.dateOfBirth}</p>
                    <p>Marital Status: {basicDetails.maritalStatus}</p>
                    <p>PAN: {basicDetails.pan}</p>
                    <p>Aadhar ID: {basicDetails.aadharId}</p>
                    <p>Father's Name: {basicDetails.fatherName}</p>
                    <p>Mother's Name: {basicDetails.motherName}</p>
                    <p>Nationality: {basicDetails.nationality}</p>
                    <p>Mother Tongue: {basicDetails.motherTongue}</p>
                    <p>Religion: {basicDetails.religion}</p>
                    <p>Caste: {basicDetails.caste}</p>
                    <p>Blood Group: {basicDetails.bloodGroup}</p>
                    <p>Current Address: {basicDetails.currentAddress}</p>
                    <p>Permanent Address: {basicDetails.permanentAddress}</p>

                    <h2>Professional Details</h2>
                    <p>Area of Research: {professionalDetails.areaOfResearch}</p>
                    <p>Experience at NITC: {professionalDetails.experienceAtNITC}</p>
                    <p>Teaching Experience Prior to NITC: {professionalDetails.teachingExperiencePrior}</p>
                    <p>Industry Experience Prior to NITC: {professionalDetails.industryExperiencePrior}</p>

                    <h2>Qualification Details</h2>
                    {qualifications.map((qualification, index) => (
                        <div key={index}>
                            <p>Qualification: {qualification.qualification}</p>
                            <p>Specialization: {qualification.specialization}</p>
                            <p>Board/University: {qualification.boardUniversity}</p>
                            <p>Division/Class: {qualification.divisionClass}</p>
                            <p>Year of Passing: {qualification.yearOfPassing}</p>
                            <p>Percentage/CGPA: {qualification.percentageOrCGPA}</p>
                        </div>
                    ))}

                    <h2>Appointment Details</h2>
                    <p>Department: {appointment.department}</p>
                    <p>Designation: {appointment.designation}</p>
                    <p>Pay Level: {appointment.payLevel}</p>
                    <p>Pay Cell: {appointment.payCell}</p>
                    <p>Date of Joining: {appointment.dateOfJoining}</p>

                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default DisplayFacultyDetails;
