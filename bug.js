const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // ... process data ...
  res.send('Data received');
});

//This code is vulnerable to an uncommon error: the `req.body` is not always populated.
//If the client sends data with a Content-Type header other than application/json,
//express.json() middleware will not parse the request body. The code will fail silently,
//returning a 200 OK response without the data being processed.  This error can be subtle and difficult to debug.