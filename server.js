const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
 
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
 
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});