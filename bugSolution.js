const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  if (!req.body) return res.status(400).send('No data received');
  const data = req.body;
  // ... process data ...
  res.send('Data received');
});
//This improved version explicitly checks if req.body is populated. If not, it sends a 400 Bad Request response,
//making the error immediately apparent.  This robust error handling prevents silent failures and makes debugging easier.