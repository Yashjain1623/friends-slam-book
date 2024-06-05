// src/components/PeopleList.js
import React from "react";
import Person from "./Person";

const PeopleList = ({
  people,
  onPin,
  onEdit,
  onDelete,
  filter,
  setFilter,
  onToggleFavorite,
}) => {
  const filteredPeople = people.filter((person) => {
    if (filter === "all") return true;
    if (filter === "favorites") return person.isFavorite;
    if (filter === "non-favorites") return !person.isFavorite;
    return true;
  });

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-md ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("favorites")}
          className={`px-4 py-2 rounded-md ${
            filter === "favorites" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Favorites
        </button>
        <button
          onClick={() => setFilter("non-favorites")}
          className={`px-4 py-2 rounded-md ${
            filter === "non-favorites"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Non-Favorites
        </button>
      </div>
      <div className="space-y-4">
        {filteredPeople.map((person) => (
          <Person
            key={person.id}
            person={person}
            onPin={onPin}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
