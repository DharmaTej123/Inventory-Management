# Inventory-Management
Just a simple full-stack inventory management app built with React, Node.js, Express, and MongoDB.Created for practice purpose...
## Features
- Add new inventory items (name, quantity, price)
- View all items
- Delete items from inventory

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **API Communication**: Axios

## 🚀 Deployment

### **Option A: Deploy Backend (Node.js) on [Render](https://render.com)**
1. Create a new service (Web Service)
2. Connect GitHub repo
3. Set:
   - Build Command: `npm install`
   - Start Command: `node server.js`
4. Set environment variable for MongoDB URI if using Atlas

### **Option B: Deploy Frontend (React) on [Netlify](https://netlify.com)**
1. Push your `frontend/` folder to a GitHub repo
2. Log in to Netlify > "New Site from Git"
3. Choose build command: `npm run build`
4. Publish directory: `build/`
