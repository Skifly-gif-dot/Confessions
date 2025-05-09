# Time Capsule Confessions

This project is a full-stack web application that allows users to submit confessions that can be scheduled for future delivery. It consists of a backend built with Node.js and Express, and a frontend built with React.

## Project Structure

```
time-capsule-confessions
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── confessionController.ts
│   │   ├── models
│   │   │   └── confession.ts
│   │   ├── routes
│   │   │   └── confessionRoutes.ts
│   │   └── types
│   │       └── index.ts
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── authController.js
│   │   └── confessionController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── models
│   │   ├── User.js
│   │   └── Confession.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── confessionRoutes.js
│   ├── services
│   │   └── emailService.js
│   ├── workers
│   │   └── emailWorker.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── Auth
│   │   │   │   ├── Login.js
│   │   │   │   └── Signup.js
│   │   │   ├── Confession
│   │   │   │   ├── ConfessionForm.js
│   │   │   │   └── ConfessionList.js
│   │   │   └── Dashboard.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│   │   └── utils
│   │       └── api.js
│   ├── .env
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Deployment

For deployment, you can use services like Heroku for the backend and Vercel or Netlify for the frontend. Make sure to configure environment variables as needed.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.