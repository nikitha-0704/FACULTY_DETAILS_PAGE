import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// Replace with your Google Client ID
const CLIENT_ID = '390899400310-6j78dt8uhau9cd18jjv8iqf72je2alvg.apps.googleusercontent.com';

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
            { qualification: '', specialization: '', nameOfBoardOrUniversity: '', divisionClass: '', yearOfPassing: '', percentageOrCGPA: '' },
        ],
        facultyAppointment: {
            department: '',
            designation: '',
            payLevel: '',
            payCell: '',
            dateOfJoining: '',
        },
    });

    const [editing, setEditing] = useState(true);
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        if (keys.length === 1) {
            setFormData({ ...formData, [name]: value });
        } else if (keys.length === 2) {
            setFormData({ ...formData, [keys[0]]: { ...formData[keys[0]], [keys[1]]: value } });
        } else if (keys.length === 3) {
            const updatedQualifications = formData.qualifications.map((q, index) =>
                index === parseInt(keys[1]) ? { ...q, [keys[2]]: value } : q
            );
            setFormData({ ...formData, qualifications: updatedQualifications });
        }
    };

    const addQualification = () => {
        setFormData({
            ...formData,
            qualifications: [
                ...formData.qualifications,
                { qualification: '', specialization: '', nameOfBoardOrUniversity: '', divisionClass: '', yearOfPassing: '', percentageOrCGPA: '' },
            ],
        });
    };

    const removeQualification = (index) => {
        const updatedQualifications = formData.qualifications.filter((_, i) => i !== index);
        setFormData({ ...formData, qualifications: updatedQualifications });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    const handleLoginSuccess = (response) => {
        console.log('Login Success: currentUser:', response.profileObj);
        setUser(response.profileObj);
    };

    const handleLoginFailure = (response) => {
        console.error('Login Failed: res:', response);
        setUser(null);
    };

    const handleLogoutSuccess = () => {
        console.log('Logout Successful');
        setUser(null);
    };

    return (
        <div className="container mt-4">
             <button
                type="button"
                className="btn btn-secondary position-fixed"
                style={{ top: '10px', right: '10px' }}
                onClick={handleLogout}
            >
                Logout
            </button>

            <h2 className="text-center">FACULTY DETAILS</h2>

            {!user ? (
                <div className="text-center mb-4">
                    <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText="Login with Google"
                        onSuccess={handleLoginSuccess}
                        onFailure={handleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            ) : (
                <div className="text-center mb-4">
                    <h4>Welcome, {user.name}!</h4>
                    <img src={user.picture} alt={user.name} style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
                    <p>Email: {user.email}</p>
                    <GoogleLogout
                        clientId={CLIENT_ID}
                        buttonText="Logout"
                        onLogoutSuccess={handleLogoutSuccess}
                    />
                </div>
            )}

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
                                                <td><input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Date of Birth</th>
                                                <td><input type="date" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <th>Marital Status</th>
                                                <td>
                                                    <select className="form-control" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                                                        <option value="">Select</option>
                                                        <option value="Single">Single</option>
                                                        <option value="Married">Married</option>
                                                    </select>
                                                </td>
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
                                                <td><textarea className="form-control" name="currentAddress" value={formData.currentAddress} onChange={handleChange}></textarea></td>
                                            </tr>
                                            <tr>
                                                <th>Permanent Address</th>
                                                <td><textarea className="form-control" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange}></textarea></td>
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
                            <div className="card-header" id="qualificationsHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#qualifications" aria-expanded="false" aria-controls="qualifications">
                                        QUALIFICATION DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="qualifications" className="collapse" aria-labelledby="qualificationsHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Qualification</th>
                                                <th>Specialization</th>
                                                <th>Name of Board/University</th>
                                                <th>Division/Class</th>
                                                <th>Year of Passing</th>
                                                <th>Percentage/CGPA</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {formData.qualifications.map((qualification, index) => (
                                                <tr key={index}>
                                                    <td><input type="text" className="form-control" name={qualifications.${index}.qualification} value={qualification.qualification} onChange={handleChange} /></td>
                                                    <td><input type="text" className="form-control" name={qualifications.${index}.specialization} value={qualification.specialization} onChange={handleChange} /></td>
                                                    <td><input type="text" className="form-control" name={qualifications.${index}.nameOfBoardOrUniversity} value={qualification.nameOfBoardOrUniversity} onChange={handleChange} /></td>
                                                    <td><input type="text" className="form-control" name={qualifications.${index}.divisionClass} value={qualification.divisionClass} onChange={handleChange} /></td>
                                                    <td><input type="text" className="form-control" name={qualifications.${index}.yearOfPassing} value={qualification.yearOfPassing} onChange={handleChange} /></td>
                                                    <td><input type="text" className="form-control" name={qualifications.${index}.percentageOrCGPA} value={qualification.percentageOrCGPA} onChange={handleChange} /></td>
                                                    <td>
                                                        <button type="button" className="btn btn-danger" onClick={() => removeQualification(index)}>x</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button type="button" className="btn btn-success btn-sm mr-1" onClick={addQualification}>+Add Qualification</button>
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
                                                <td><input type="date" className="form-control" name="facultyAppointment.dateOfJoining" value={formData.facultyAppointment.dateOfJoining} onChange={handleChange} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary" >SUBMIT</button>
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
                            <div className="card-header" id="qualificationsHeading">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#qualifications" aria-expanded="false" aria-controls="qualifications">
                                        QUALIFICATION DETAILS
                                    </button>
                                </h2>
                            </div>
                            <div id="qualifications" className="collapse" aria-labelledby="qualificationsHeading" data-parent="#facultyDetails">
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Qualification</th>
                                                <th>Specialization</th>
                                                <th>Name of Board/University</th>
                                                <th>Division/Class</th>
                                                <th>Year of Passing</th>
                                                <th>Percentage/CGPA</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {formData.qualifications.map((qualification, index) => (
                                                <tr key={index}>
                                                    <td>{qualification.qualification}</td>
                                                    <td>{qualification.specialization}</td>
                                                    <td>{qualification.nameOfBoardOrUniversity}</td>
                                                    <td>{qualification.divisionClass}</td>
                                                    <td>{qualification.yearOfPassing}</td>
                                                    <td>{qualification.percentageOrCGPA}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
                    <div className="text-center mt-4">
                        <button type="button" className="btn btn-primary" onClick={() => setEditing(true)}>EDIT</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
