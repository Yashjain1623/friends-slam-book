// src/services/birthdayChecker.js
import axios from "axios";

const webhookUrl =
  "https://discord.com/api/webhooks/1247265265176281170/KhxdHLaZxtisUeN9mR-sE7N3wDV4a88Dpln4lT2pqofgLvqyCSnbbDUz7GZPwrS1utSM";
let birthdayInterval = null;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}-${day}`;
};

const getTodayDate = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${month}-${day}`;
};

export const checkBirthdays = (people) => {
  const today = getTodayDate();
  people.forEach((person) => {
    if (formatDate(person.birthday) === today) {
      axios
        .post(webhookUrl, {
          content: `Happy Birthday, ${person.name}! 🎉`,
        })
        .catch((error) => {
          console.error("Error sending birthday message:", error);
        });
    }
  });
};

export const startBirthdayChecker = (people) => {
  if (birthdayInterval) {
    clearInterval(birthdayInterval);
  }
  birthdayInterval = setInterval(() => checkBirthdays(people), 30000);
};
