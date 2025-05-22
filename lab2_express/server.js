// Created by Ernest OVBIOLOKUN
const express = require('express');
const app = express();
const routes = require('./routes/routes');

// Use routes from routes.js
app.use('/', routes);

// Start server on port 8000
app.listen(8000, () => {
  console.log("✅ Server running at http://localhost:8000");
});
