# Time Capsule Confessions Backend

This is the backend for the Time Capsule Confessions application. It is built using Node.js, Express, and MongoDB, and is designed to handle user confessions, including creating, retrieving, and deleting them.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/confessions.git
   cd confessions/backend
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root of the backend directory and add the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**
   Start the server with:
   ```bash
   npm start
   ```

## API Usage

### Endpoints

- **POST /api/confessions**
  - Create a new confession.
  - Request body: `{ "userId": "string", "content": "string", "scheduledTime": "date" }`

- **GET /api/confessions**
  - Retrieve all confessions.

- **DELETE /api/confessions/:id**
  - Delete a confession by ID.

## Technologies Used

- Node.js
- Express
- Mongoose
- dotenv
- bcrypt
- jsonwebtoken

## License

This project is licensed under the MIT License.