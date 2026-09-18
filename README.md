# Blogify 📝

A simple full-stack blogging platform built with **Node.js**, **Express**, **EJS**, and **MongoDB**.

## Features

- **User Authentication**: Register and log in using JWT stored in cookies with secure password hashing.
- **Blog Posts**: Create and read blogs with cover image uploads via Multer.
- **Comments**: Authenticated users can leave comments on blog posts.
- **Responsive UI**: Clean, mobile-friendly interface built with Bootstrap 5.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Frontend**: EJS, Bootstrap 5
- **Authentication**: JWT, Crypto (HMAC-SHA256), Cookie-Parser
- **File Uploads**: Multer

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
PORT=8000
MONGO_URL=mongodb://localhost:27017/blogify
```

### 3. Run the App
- **Development** (auto-reloads on file changes):
  ```bash
  npm run dev
  ```
- **Production**:
  ```bash
  npm start
  ```

Open [http://localhost:8000](http://localhost:8000) in your browser.

## License

ISC
