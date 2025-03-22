# Firebase FCM Testing Example with Next.js

This project provides a comprehensive example for testing Firebase Cloud Messaging (FCM) functionalities using Next.js. It demonstrates how to send and receive push notifications effectively.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## ✨ Features

### Firebase Cloud Messaging

- Send push notifications using Firebase Cloud Messaging
- Manage notification permissions
- Subscribe to notification topics
- Handle background notifications with service workers

## 🚀 Demo

Visit the live demo at: [https://firebase-fcm-example.vercel.app](https://firebase-fcm-example.vercel.app)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.x or later
- npm 9.x or later
- A modern web browser (Chrome, Edge, Firefox, or Safari)
- Firebase account (for push notifications)

## 🔧 Installation

1. Clone the repository:

```shell
git clone https://github.com/yourusername/firebase-fcm-example.git
cd firebase-fcm-example
```

2. Install dependencies:

```shell
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:

```plaintext
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
NEXT_PUBLIC_VAPID_KEY=your_vapid_public_key
```

## ⚙️ Configuration

### Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Add a web app to your Firebase project
3. Enable Firebase Cloud Messaging
4. Generate VAPID keys for web push notifications
5. Update the `.env.local` file with your Firebase configuration

### Service Worker

The service worker is configured to handle background notifications using Firebase Cloud Messaging. It performs the following tasks:

- **Firebase Initialization**: Initializes the Firebase app with the required configuration.
- **Messaging Instance**: Retrieves an instance of Firebase Messaging to manage background notifications.
- **Push Event Listener**: Handles incoming push notifications (currently commented out for testing purposes).
- **Notification Click Event Listener**: Manages user interactions with notifications (currently commented out for testing purposes).

To customize the service worker's behavior, modify the [firebase-messaging-sw.js](firebase-messaging-sw.js) file located in the `public` directory.

## 🚀 Usage

### Development Mode

Run the development server:

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Mode

Build and start the production server:

```shell
npm run build
npm start
```

## 🧪 Testing

To test Firebase FCM notifications:

1. Ensure your Firebase configuration is correct in the `.env.local` file.
2. Use the Push Notification Manager to send notifications.
3. Check the console for any errors or logs related to notification sending and receiving.

## Project Structure

- `components/`: Contains React components for managing notifications
- `lib/`: Includes Firebase configuration and utility functions
- `pages/`: Next.js pages, including the main notification management interface

## Deployment

Deploy the application to a hosting provider that supports Node.js applications, ensuring HTTPS is enabled for full PWA functionality.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Troubleshooting

If you encounter issues, check the browser console for errors and ensure your Firebase configuration is correct.

## License

This project is licensed under the MIT License.
