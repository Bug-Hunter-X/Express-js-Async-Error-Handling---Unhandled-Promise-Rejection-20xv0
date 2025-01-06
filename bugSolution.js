const express = require('express');
const app = express();
app.get('/', (req, res) => {
  try {
    someAsyncOperation().then(() => {
      res.send('Hello World!');
    });
  } catch (err) {
    console.error('Error in request handler:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  // ... some code that might throw an error
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
} 