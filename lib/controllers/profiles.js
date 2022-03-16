const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  const profile = { id: '1', name: 'Test User', quote: 'nice quote' };
  res.send(profile);
});
