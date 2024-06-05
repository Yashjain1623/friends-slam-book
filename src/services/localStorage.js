export const getPeople = () => {
  const data = localStorage.getItem("people");
  return data ? JSON.parse(data) : [];
};

export const savePeople = (people) => {
  localStorage.setItem("people", JSON.stringify(people));
};
