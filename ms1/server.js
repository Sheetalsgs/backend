const express = require('express');
const app = express();

// Define your API endpoints
app.get('/api/data', (req, res) => {
  const data = [
    { id: 1, name: 'Data 1' },
    { id: 2, name: 'Data 2' },
    { id: 3, name: 'Data 3' },
    { id: 4, name: 'Data 4' }

  ];
  res.json(data);
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// Start the server
const port = 3001; // You can use any available port
app.listen(port, () => {
  console.log(`Backend API server is running on port ${port}`);
});
