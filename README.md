#Syncing HTML Editor Data with MongoDB & Node.js

A simple Node.js app that serves a browser-based HTML editor and persists its content to MongoDB. Use it locally or deploy to a server (e.g., AWS).

✨ What this repo does

Serves an /editor page (rich-text/HTML editor)

Loads initial content from MongoDB

Saves updates back to the same document

Configurable via .env and config/database.js

#Prerequisites

Node.js (LTS recommended)

MongoDB (local or Atlas)

Optional: npm (or pnpm/yarn)

🔧 Configuration
1) .env

Create a .env file in the project root:

PORT=3000
HOST_NAME=http://localhost:3000/
# Optional (recommended): move content ID here instead of hardcoding
CONTENT_ID=5a0877c0f466707da30767ea


If CONTENT_ID isn’t supported in your code yet, see “Avoid hardcoding the ObjectId” below and update the controller to read from process.env.CONTENT_ID.

2) MongoDB connection (config/database.js)

Update with your own URI:

// config/database.js
module.exports = {
  // Local (no auth)
  // url: 'mongodb://127.0.0.1:27017/test',

  // Local (with auth)
  // url: 'mongodb://username:password@127.0.0.1:27017/test?authSource=admin',

  // MongoDB Atlas (example)
  // url: 'mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/test?retryWrites=true&w=majority',

  url: 'mongodb://username:password@hostname:27017/database'
};



# 1) Install dependencies
npm install

# 2) Copy environment example (if provided) and edit
cp .env.example .env   # or create .env yourself (see below)

# 3) Start the app (http://localhost:3000/editor by default)
npm start

