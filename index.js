const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const { setTickets, EtatTicket } = require('./services/ticketsService');
const ticketsRoutes = require('./routes/tickets');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));

setTickets([
  {
    id: 1,
    auteur: { id: 1, name: 'Alice' },
    titre: 'Ticket 1',
    description: 'Description du ticket 1',
    etat: EtatTicket.OUVERT,
    creation: new Date('2025-06-07T15:30:00Z'),
    dateCreation: '07/06/2025 15:30:00'
  },
  {
    id: 2,
    auteur: { id: 2, name: 'Bob' },
    titre: 'Ticket 2',
    description: 'Description du ticket 2',
    etat: EtatTicket.CLOS,
    creation: new Date('2025-06-07T15:35:00Z'),
    dateCreation: '07/06/2025 15:35:00'
  },
  {
    id: 3,
    auteur: { id: 3, name: 'Joe' },
    titre: 'Ticket 3',
    description: 'Description du ticket 3',
    etat: EtatTicket.OUVERT,
    creation: new Date('2025-06-08T15:05:00Z'),
    dateCreation: '08/06/2025 15:05:00'
  }
]);

app.use('/', ticketsRoutes);

const port = process.env.PORT_NO || 3000;
app.listen(port, () => console.log(`Écoute sur http://localhost:${port}`));
