const { Ticket, EtatTicket } = require('../bo/Ticket');

let tickets = [];

function findTickets() {
  return [...tickets].sort((a, b) => a.creation - b.creation);
}

function setTickets(newTickets) {
  tickets = newTickets;
}

function creerTicket(data) {
  const ticket = new Ticket(data);
  tickets.push(ticket);
  return ticket;
}

module.exports = { findTickets, setTickets, creerTicket, EtatTicket };
