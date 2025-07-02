const express = require('express');
const router = express.Router();
const { findTickets } = require('../services/ticketsService');
const { format } = require('date-fns');

// GET / et GET /tickets
async function liste(req, res) {
  const tickets = findTickets();
  res.render('liste-tickets', { tickets, format });
}

router.get('/', liste);
router.get('/tickets', liste);

module.exports = router;