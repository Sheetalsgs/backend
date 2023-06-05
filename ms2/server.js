const express = require('express');
const app = express();

// Define your API endpoints
app.get('/api/data2', (req, res) => {
  const data = [
    { id: 1, name: 'Data .......data2 1' },
    { id: 2, name: 'Data ........data2  2' },
    { id: 3, name: 'Data ........data2 3' }
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
const port = 3002; // You can use any available port
app.listen(port, () => {
  console.log(`Backend API server is running on port ${port}`);
});
