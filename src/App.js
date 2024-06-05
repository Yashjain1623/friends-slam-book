import React, { useState, useEffect } from "react";
import AddPersonForm from "./components/AddPersonForm";
import PeopleList from "./components/PeopleList";
import { getPeople, savePeople } from "./services/localStorage";
import { startBirthdayChecker } from "./services/birthdayChecker";

const App = () => {
  const [people, setPeople] = useState(getPeople());
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(true); // State to manage form and list view

  useEffect(() => {
    savePeople(people);
    startBirthdayChecker(people);
  }, [people]);

  const addPerson = (person) => {
    setPeople([...people, { ...person, id: Date.now(), isFavorite: false }]);
  };

  const pinPerson = (person) => {
    setPeople([person, ...people.filter((p) => p.id !== person.id)]);
  };

  const editPerson = (updatedPerson) => {
    setPeople(
      people.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
  };

  const deletePerson = (person) => {
    setPeople(people.filter((p) => p.id !== person.id));
  };

  const toggleFavorite = (personId) => {
    setPeople(
      people.map((person) =>
        person.id === personId
          ? { ...person, isFavorite: !person.isFavorite }
          : person
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">
        Slam Book with Notification System
      </h1>
      <div className="flex justify-center mt-4 space-x-2">
        {" "}
        {/* Added space-x-2 for spacing */}
        <button
          onClick={() => setShowForm(true)}
          className={`px-4 py-2 rounded-md ${
            showForm ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Add Person
        </button>
        <button
          onClick={() => setShowForm(false)}
          className={`px-4 py-2 rounded-md ${
            !showForm ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Show People
        </button>
      </div>
      <div className="mt-2">
        {" "}
        {/* Added margin-top for spacing */}
        {showForm ? (
          <AddPersonForm addPerson={addPerson} />
        ) : (
          <PeopleList
            people={people}
            onPin={pinPerson}
            onEdit={editPerson}
            onDelete={deletePerson}
            filter={filter}
            setFilter={setFilter}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </div>
  );
};

export default App;
