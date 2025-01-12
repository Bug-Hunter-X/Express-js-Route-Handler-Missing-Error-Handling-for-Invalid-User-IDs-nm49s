const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  const parsedUserId = parseInt(userId);
  const user = users.find(user => user.id === parsedUserId);
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});