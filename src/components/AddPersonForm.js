import React, { useState } from "react";

const AddPersonForm = ({ addPerson }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedBirthday = new Date(birthday).toISOString().slice(0, 10);
    addPerson({ name, contact, age, birthday: formattedBirthday, hobbies });
    setName("");
    setContact("");
    setAge("");
    setBirthday("");
    setHobbies("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
        <h1 className="text-2xl font-bold text-center">Add Person</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact"
              required
            />
          </div>
          <div>
            <input
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              required
            />
          </div>
          <div>
            <input
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              placeholder="Birthday"
              required
            />
          </div>
          <div>
            <input
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              placeholder="Hobbies"
              required
            />
          </div>
          <div>
            <button
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Add Person
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPersonForm;
