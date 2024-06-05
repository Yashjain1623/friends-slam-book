# Slam-Book-with-Notification-System

This project is a digital slam book that allows users to manage and display a list of people's details. It features the ability to add, edit, and delete contacts, mark favorites, filter views, and send birthday reminders via a webhook to Discord.

## Features

### User Data Management
- **Add, edit, and delete people**: Manage details like name, contact, age, birthday, and hobbies.
- **Favorites**: Mark people as favorites and filter the list based on all, favorite, or non-favorite people.
- **Birthday Reminder**: Automatically check for birthdays every 30 seconds and send a "Happy Birthday" message to a Discord or Slack webhook.

## Getting Started

### Prerequisites
Ensure you have the following installed:
1. **Node.js** (version 14.x or later)
2. **npm**

### Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/slam-book-with-notification-system.git
    cd slam-book-with-notification-system
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Running the Application**:
    ```bash
    npm start
    ```


## Usage

### Adding a Person
1. Click on "Add Person" to open the form.
2. Fill in the details including name, contact (numeric), age, birthday (valid date format), and hobbies.
3. Click "Add Person" to save the details.

### Viewing and Managing People
1. Click on "Show People" to view the list.
2. Use the dropdown next to each person to pin, edit, or delete their details.
3. Use the filter buttons to toggle views between all, favorite, and non-favorite people.
4. Click the "Favorite" button to mark a person as a favorite or unfavorite.

### Birthday Reminder
1. The application checks for birthdays every 30 seconds.
2. If today is someone's birthday, a "Happy Birthday" message is sent to the configured Discord or Slack webhook.

### Webhook Integration
1. To integrate with Discord or Slack:
2. Obtain a webhook URL from Discord or Slack.
3. Replace the `webhookUrl` variable in `src/services/birthdayChecker.js` with your webhook URL.
    ```javascript
    const webhookUrl = "https://discord.com/api/webhooks/1247265265176281170/KhxdHLaZxtisUeN9mR-sE7N3wDV4a88Dpln4lT2pqofgLvqyCSnbbDUz7GZPwrS1utSM";
    ```

### Check Birthday Notifications
To verify if the birthday notification messages are being sent correctly, you can join our Discord server using the link below:
[Join the Discord Server](https://discord.gg/KTfEcPuyXm)

## Technologies Used
1. **React**
2. **Tailwind CSS** (for styling)
3. **Axios** (for HTTP requests)
4. **Local Storage** (for data persistence)


