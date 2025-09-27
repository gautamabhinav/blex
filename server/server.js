import { v2 } from 'cloudinary';


import app from './app.js';
import connectToDB from './configs/dbConn.js';

const port = process.env.PORT || 10000;

// import path from "path";


// const _dirname = path.resolve();

// Cloudinary configuration
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Create an order
// export const options = {
//   amount: 10000,  // Amount in paise (₹100.00)
//   currency: 'INR',
//   receipt: 'order_rcptid_11'
// };

// const PORT = process.env.PORT || 5000;

// // Serve static files from the 'dist' directory
// app.use(express.static(path.join(__dirname, "build")));

// // Serve index.html for any route (SPA support)
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(port, async () => {
  // Connect to DB
  await connectToDB();
  console.log(`App is running at http://localhost:${port}`);
});



// import http from 'http';
// import { Server } from 'socket.io';
// import { v2 as cloudinary } from 'cloudinary';
// import app, { initRealtime } from './app.js';
// import connectToDB from './configs/dbConn.js';
// import mongoose from 'mongoose';

// const port = process.env.PORT || 10000;

// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Connect to MongoDB
// // connectToDB()
//   // .then(() => console.log('✅ MongoDB connected'))
//   // .catch((err) => console.error('MongoDB connection error:', err));


//   connectToDB()

// // Create HTTP server for Socket.IO
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: { origin: process.env.FRONTEND_URL, credentials: true },
// });

// // Initialize real-time system
// initRealtime(server, io);

// // Start server
// server.listen(port, () => {
//   console.log(`🚀 App is running at http://localhost:${port}`);
// });
