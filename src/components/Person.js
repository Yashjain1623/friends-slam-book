import React, { useState } from "react";

const Person = ({ person, onPin, onEdit, onDelete, onToggleFavorite }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedPerson, setEditedPerson] = useState(person);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    if (selectedOption === "pin") {
      onPin(person);
    } else if (selectedOption === "edit") {
      setIsEditing(true);
    } else if (selectedOption === "delete") {
      onDelete(person);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson({ ...editedPerson, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editedPerson);
    setIsEditing(false);
  };

  const formattedBirthday = person.birthday;

  return (
    <div className="person p-4 border rounded-md shadow-sm">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={editedPerson.name}
              onChange={handleEditChange}
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="contact"
              value={editedPerson.contact}
              onChange={handleEditChange}
              placeholder="Contact"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="age"
              value={editedPerson.age}
              onChange={handleEditChange}
              placeholder="Age"
              required
            />
          </div>
          <div>
            <input
              type="date"
              name="birthday"
              value={editedPerson.birthday}
              onChange={handleEditChange}
              placeholder="Birthday"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="hobbies"
              value={editedPerson.hobbies}
              onChange={handleEditChange}
              placeholder="Hobbies"
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <h3>Name: {person.name}</h3>
          <p>Contact: {person.contact}</p>
          <p>Age: {person.age}</p>
          <p>Birthday: {formattedBirthday}</p>
          <p>Hobbies: {person.hobbies}</p>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select an action</option>
            <option value="pin">Pin</option>
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
          </select>
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2"
          >
            Perform Action
          </button>
          <button
            onClick={() => onToggleFavorite(person.id)}
            className={`ml-2 px-2 py-1 rounded-md ${
              person.isFavorite
                ? "bg-yellow-500 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            {person.isFavorite ? "Unfavorite" : "Favorite"}
          </button>
        </>
      )}
    </div>
  );
};

export default Person;
