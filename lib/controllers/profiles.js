const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  const profile = await ProfileService.create(req.body);
  res.send(profile);
});

// below is how to hard code the data at the beginning so that the test passes:
// const profile = { id: '1', name: 'Test User', quote: 'nice quote' };
// res.send(profile);

