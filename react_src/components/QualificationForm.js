import React from 'react';

const QualificationForm = ({ index, qualification, onChange, onRemove }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(index, {
      ...qualification,
      [name]: value,
    });
  };

  return (
    <div>
      <h4>Qualification {index + 1}</h4>
      <input type="text" name="qualification" placeholder="Qualification" value={qualification.qualification} onChange={handleChange} />
      <input type="text" name="specialization" placeholder="Specialization" value={qualification.specialization} onChange={handleChange} />
      <input type="text" name="boardUniversity" placeholder="Board/University" value={qualification.boardUniversity} onChange={handleChange} />
      <input type="text" name="divisionClass" placeholder="Division/Class" value={qualification.divisionClass} onChange={handleChange} />
      <input type="number" name="yearOfPassing" placeholder="Year of Passing" value={qualification.yearOfPassing} onChange={handleChange} />
      <input type="number" name="percentage" placeholder="Percentage/CGPA" value={qualification.percentage} onChange={handleChange} />
      <button type="button" onClick={() => onRemove(index)}>Remove</button>
    </div>
  );
};

export default QualificationForm;
