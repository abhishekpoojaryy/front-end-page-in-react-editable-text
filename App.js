import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState({
    name: 'John Doe',
    age: '30',
    email: 'johndoe@example.com'
  });

  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    setEditMode(false);
    // Perform any necessary save or update operations with the data
  };

  return (
    <div className="container">
      <h1>Editable Page</h1>
      <div className="data-container">
        <div className="data-row">
          <span>Name:</span>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />
          ) : (
            <span onClick={handleEdit}>{data.name}</span>
          )}
        </div>
        <div className="data-row">
          <span>Age:</span>
          {editMode ? (
            <input
              type="text"
              name="age"
              value={data.age}
              onChange={handleInputChange}
            />
          ) : (
            <span onClick={handleEdit}>{data.age}</span>
          )}
        </div>
        <div className="data-row">
          <span>Email:</span>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
          ) : (
            <span onClick={handleEdit}>{data.email}</span>
          )}
        </div>
      </div>
      {editMode && (
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      )}
    </div>
  );
};

export default App;