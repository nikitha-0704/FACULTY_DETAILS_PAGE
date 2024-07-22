import React, { useState } from 'react';
import './App.css'; // Your custom CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        dateOfBirth: '',
        maritalStatus: '',
        pan: '',
        aadharId: '',
        fatherName: '',
        motherName: '',
        nationality: '',
        motherTongue: '',
        religion: '',
        caste: '',
        bloodGroup: '',
        currentAddress: '',
        permanentAddress: '',
        areaOfResearch: '',
        experienceAtNITC: '',
        teachingExperiencePriorToNITC: '',
        industryExperiencePriorToNITC: '',
        qualifications: [
            {
                qualification: '',
                specialization: '',
                nameOfBoardOrUniversity: '',
                divisionClass: '',
                yearOfPassing: '',
                percentageOrCGPA: ''
            }
        ],
        facultyAppointment: {
            department: '',
            designation: '',
            payLevel: '',
            payCell: '',
            dateOfJoining: ''
        }
    });

    const [editing, setEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        if (keys[0] === 'qualifications') {
            const index = keys[1];
            const key = keys[2];
            setFormData(prevState => {
                const newQualifications = [...prevState.qualifications];
                newQualifications[index][key] = value;
                return { ...prevState, qualifications: newQualifications };
            });
        } else if (keys.length > 1) {
            setFormData(prevState => {
                const newFormData = { ...prevState };
                newFormData[keys[0]][keys[1]] = value;
                return newFormData;
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const addQualification = () => {
        setFormData(prevState => ({
            ...prevState,
            qualifications: [
                ...prevState.qualifications,
                {
                    qualification: '',
                    specialization: '',
                    nameOfBoardOrUniversity: '',
                    divisionClass: '',
                    yearOfPassing: '',
                    percentageOrCGPA: ''
                }
            ]
        }));
    };

    const removeQualification = (index) => {
        setFormData(prevState => ({
            ...prevState,
            qualifications: prevState.qualifications.filter((_, i) => i !== index)
        }));
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">FACULTY DETAILS</h2>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <div className="accordion" id="facultyDetails">
                        <div className="card">
                            <div className="card-header" id="basicDetailsHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#basicDetails" aria-expanded="true" aria-controls="basicDetails">
                                        BASIC DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="basicDetails" className="collapse show" aria-labelledby="basicDetailsHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td><input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Age</th>
                                                <td><input type="text" className="form-control" name="age" value={formData.age} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Date of Birth</th>
                                                <td><input type="text" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Marital Status</th>
                                                <td><input type="text" className="form-control" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>PAN</th>
                                                <td><input type="text" className="form-control" name="pan" value={formData.pan} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Aadhar ID</th>
                                                <td><input type="text" className="form-control" name="aadharId" value={formData.aadharId} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Father Name</th>
                                                <td><input type="text" className="form-control" name="fatherName" value={formData.fatherName} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Mother Name</th>
                                                <td><input type="text" className="form-control" name="motherName" value={formData.motherName} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Nationality</th>
                                                <td><input type="text" className="form-control" name="nationality" value={formData.nationality} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Mother Tongue</th>
                                                <td><input type="text" className="form-control" name="motherTongue" value={formData.motherTongue} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Religion</th>
                                                <td><input type="text" className="form-control" name="religion" value={formData.religion} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Caste</th>
                                                <td><input type="text" className="form-control" name="caste" value={formData.caste} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Blood Group</th>
                                                <td><input type="text" className="form-control" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Current Address</th>
                                                <td><input type="text" className="form-control" name="currentAddress" value={formData.currentAddress} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Permanent Address</th>
                                                <td><input type="text" className="form-control" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="professionalDetailsHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#professionalDetails" aria-expanded="false" aria-controls="professionalDetails">
                                        PROFESSIONAL DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="professionalDetails" className="collapse" aria-labelledby="professionalDetailsHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Area of Research</th>
                                                <td><input type="text" className="form-control" name="areaOfResearch" value={formData.areaOfResearch} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Experience at NITC</th>
                                                <td><input type="text" className="form-control" name="experienceAtNITC" value={formData.experienceAtNITC} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Teaching Experience Prior to NITC</th>
                                                <td><input type="text" className="form-control" name="teachingExperiencePriorToNITC" value={formData.teachingExperiencePriorToNITC} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Industry Experience Prior to NITC</th>
                                                <td><input type="text" className="form-control" name="industryExperiencePriorToNITC" value={formData.industryExperiencePriorToNITC} onChange={handleChange} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="qualificationDetailsHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#qualificationDetails" aria-expanded="false" aria-controls="qualificationDetails">
                                        QUALIFICATION DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="qualificationDetails" className="collapse" aria-labelledby="qualificationDetailsHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    {formData.qualifications.map((qualification, index) => (
                                        <div key={index} className="qualification-section mb-3">
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <th>Qualification</th>
                                                        <td><input type="text" className="form-control" name={`qualifications.${index}.qualification`} value={qualification.qualification} onChange={handleChange} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Specialization</th>
                                                        <td><input type="text" className="form-control" name={`qualifications.${index}.specialization`} value={qualification.specialization} onChange={handleChange} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Name of Board/University</th>
                                                        <td><input type="text" className="form-control" name={`qualifications.${index}.nameOfBoardOrUniversity`} value={qualification.nameOfBoardOrUniversity} onChange={handleChange} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Division/Class</th>
                                                        <td><input type="text" className="form-control" name={`qualifications.${index}.divisionClass`} value={qualification.divisionClass} onChange={handleChange} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Year of Passing</th>
                                                        <td><input type="text" className="form-control" name={`qualifications.${index}.yearOfPassing`} value={qualification.yearOfPassing} onChange={handleChange} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Percentage/CGPA</th>
                                                        <td><input type="text" className="form-control" name={`qualifications.${index}.percentageOrCGPA`} value={qualification.percentageOrCGPA} onChange={handleChange} /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button type="button" className="btn btn-danger" onClick={() => removeQualification(index)}>Remove</button>
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-primary" onClick={addQualification}>Add Qualification</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="facultyAppointmentHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#facultyAppointment" aria-expanded="false" aria-controls="facultyAppointment">
                                        FACULTY APPOINTMENT DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="facultyAppointment" className="collapse" aria-labelledby="facultyAppointmentHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Department</th>
                                                <td><input type="text" className="form-control" name="facultyAppointment.department" value={formData.facultyAppointment.department} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Designation</th>
                                                <td><input type="text" className="form-control" name="facultyAppointment.designation" value={formData.facultyAppointment.designation} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Pay Level</th>
                                                <td><input type="text" className="form-control" name="facultyAppointment.payLevel" value={formData.facultyAppointment.payLevel} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Pay Cell</th>
                                                <td><input type="text" className="form-control" name="facultyAppointment.payCell" value={formData.facultyAppointment.payCell} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Date of Joining</th>
                                                <td><input type="text" className="form-control" name="facultyAppointment.dateOfJoining" value={formData.facultyAppointment.dateOfJoining} onChange={handleChange} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">SUBMIT</button>
                    </div>
                </form>
            ) : (
                <div>
                    <div className="accordion" id="facultyDetails">
                        <div className="card">
                            <div className="card-header" id="basicDetailsHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#basicDetails" aria-expanded="true" aria-controls="basicDetails">
                                        BASIC DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="basicDetails" className="collapse show" aria-labelledby="basicDetailsHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td>{formData.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Age</th>
                                                <td>{formData.age}</td>
                                            </tr>
                                            <tr>
                                                <th>Date of Birth</th>
                                                <td>{formData.dateOfBirth}</td>
                                            </tr>
                                            <tr>
                                                <th>Marital Status</th>
                                                <td>{formData.maritalStatus}</td>
                                            </tr>
                                            <tr>
                                                <th>PAN</th>
                                                <td>{formData.pan}</td>
                                            </tr>
                                            <tr>
                                                <th>Aadhar ID</th>
                                                <td>{formData.aadharId}</td>
                                            </tr>
                                            <tr>
                                                <th>Father Name</th>
                                                <td>{formData.fatherName}</td>
                                            </tr>
                                            <tr>
                                                <th>Mother Name</th>
                                                <td>{formData.motherName}</td>
                                            </tr>
                                            <tr>
                                                <th>Nationality</th>
                                                <td>{formData.nationality}</td>
                                            </tr>
                                            <tr>
                                                <th>Mother Tongue</th>
                                                <td>{formData.motherTongue}</td>
                                            </tr>
                                            <tr>
                                                <th>Religion</th>
                                                <td>{formData.religion}</td>
                                            </tr>
                                            <tr>
                                                <th>Caste</th>
                                                <td>{formData.caste}</td>
                                            </tr>
                                            <tr>
                                                <th>Blood Group</th>
                                                <td>{formData.bloodGroup}</td>
                                            </tr>
                                            <tr>
                                                <th>Current Address</th>
                                                <td>{formData.currentAddress}</td>
                                            </tr>
                                            <tr>
                                                <th>Permanent Address</th>
                                                <td>{formData.permanentAddress}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="professionalDetailsHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#professionalDetails" aria-expanded="false" aria-controls="professionalDetails">
                                        PROFESSIONAL DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="professionalDetails" className="collapse" aria-labelledby="professionalDetailsHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Area of Research</th>
                                                <td>{formData.areaOfResearch}</td>
                                            </tr>
                                            <tr>
                                                <th>Experience at NITC</th>
                                                <td>{formData.experienceAtNITC}</td>
                                            </tr>
                                            <tr>
                                                <th>Teaching Experience Prior to NITC</th>
                                                <td>{formData.teachingExperiencePriorToNITC}</td>
                                            </tr>
                                            <tr>
                                                <th>Industry Experience Prior to NITC</th>
                                                <td>{formData.industryExperiencePriorToNITC}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="qualificationDetailsHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#qualificationDetails" aria-expanded="false" aria-controls="qualificationDetails">
                                        QUALIFICATION DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="qualificationDetails" className="collapse" aria-labelledby="qualificationDetailsHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    {formData.qualifications.map((qualification, index) => (
                                        <div key={index} className="qualification-section mb-3">
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <th>Qualification</th>
                                                        <td>{qualification.qualification}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Specialization</th>
                                                        <td>{qualification.specialization}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Name of Board/University</th>
                                                        <td>{qualification.nameOfBoardOrUniversity}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Division/Class</th>
                                                        <td>{qualification.divisionClass}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Year of Passing</th>
                                                        <td>{qualification.yearOfPassing}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Percentage/CGPA</th>
                                                        <td>{qualification.percentageOrCGPA}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="facultyAppointmentHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#facultyAppointment" aria-expanded="false" aria-controls="facultyAppointment">
                                        FACULTY APPOINTMENT DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="facultyAppointment" className="collapse" aria-labelledby="facultyAppointmentHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Department</th>
                                                <td>{formData.facultyAppointment.department}</td>
                                            </tr>
                                            <tr>
                                                <th>Designation</th>
                                                <td>{formData.facultyAppointment.designation}</td>
                                            </tr>
                                            <tr>
                                                <th>Pay Level</th>
                                                <td>{formData.facultyAppointment.payLevel}</td>
                                            </tr>
                                            <tr>
                                                <th>Pay Cell</th>
                                                <td>{formData.facultyAppointment.payCell}</td>
                                            </tr>
                                            <tr>
                                                <th>Date of Joining</th>
                                                <td>{formData.facultyAppointment.dateOfJoining}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={() => setEditing(true)}>EDIT</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;