# Time Capsule Confessions Backend

This directory contains the backend code for the Time Capsule Confessions application. The backend is built using Node.js and Express, providing RESTful APIs for managing user authentication and confessions.

## Project Structure

```
backend
├── src
│   ├── app.ts                # Main application file
│   ├── controllers           # Contains controller files for handling requests
│   │   └── confessionController.ts  # Manages confession-related operations
│   ├── models                # Contains model files for database schemas
│   │   └── confession.ts     # Defines the Confession model
│   ├── routes                # Contains route definitions
│   │   └── confessionRoutes.ts  # Routes for confession-related endpoints
│   └── types                 # Type definitions for TypeScript
│       └── index.ts
├── config
│   └── db.js                 # Database configuration and connection logic
├── controllers
│   ├── authController.js     # Handles user authentication (login/signup)
│   └── confessionController.js  # Manages confessions
├── middleware
│   └── authMiddleware.js      # Middleware for authentication checks
├── models
│   ├── User.js               # User model definition
│   └── Confession.js         # Confession model definition
├── routes
│   ├── authRoutes.js         # Authentication-related routes
│   └── confessionRoutes.js    # Confession-related routes
├── services
│   └── emailService.js       # Functions for sending emails
├── workers
│   └── emailWorker.js        # Logic for processing email tasks
├── .env                       # Environment variables for sensitive information
├── server.js                 # Entry point of the backend application
├── package.json              # npm configuration file
└── tsconfig.json             # TypeScript configuration file
```

## Setup Instructions

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.