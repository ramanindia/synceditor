Syncing HTML Editor Data with MongoDB & Node.js
A lightweight Node.js application that provides a browser-based HTML editor and synchronizes its content with a MongoDB database. It can run locally or be easily deployed to a cloud service like AWS.

✨ What This Repository Does
Serves an /editor page with a rich-text/HTML editor

Loads initial content from MongoDB

Saves updates back to the same document

Configurable via .env and config/database.js

🧩 Prerequisites
Ensure the following tools are installed before starting:

Node.js (LTS recommended)

MongoDB (local or Atlas instance)

npm, pnpm, or yarn (optional package manager)

🔧 Configuration
1. Environment File (.env)
Create a .env file in the project root containing:

text
PORT=3000
HOST_NAME=http://localhost:3000/
# Optional (recommended): move content ID here instead of hardcoding
CONTENT_ID=5a0877c0f466707da30767ea
If CONTENT_ID isn’t supported yet, see the “Avoid Hardcoding ObjectId” section below and modify your controller to read it from process.env.CONTENT_ID.

2. MongoDB Connection (config/database.js)
Configure your database connection with your own MongoDB URI:

js
// config/database.js
module.exports = {
  // Local (no authentication)
  // url: 'mongodb://127.0.0.1:27017/test',

  // Local (with authentication)
  // url: 'mongodb://username:password@127.0.0.1:27017/test?authSource=admin',

  // MongoDB Atlas (example)
  // url: 'mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/test?retryWrites=true&w=majority',

  url: 'mongodb://username:password@hostname:27017/database'
};
⚙️ Setup Instructions
bash
# 1) Install dependencies
npm install

# 2) Copy environment example (if available) and edit
cp .env.example .env   # or create .env manually as shown above

# 3) Start the app (default: http://localhost:3000/editor)
npm start
Then open your browser at:
http://localhost:3000/editor
