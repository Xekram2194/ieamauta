const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
  console.log('Received contact form submission:', req.body);
  // TODO: Implement email sending logic here
  res.send('Contact form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
