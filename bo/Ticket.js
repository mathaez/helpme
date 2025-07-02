const EtatTicket = {
    OUVERT: 'ouvert',
    CLOS: 'clos',
  };
  
  class Ticket {
    static lastId = 0;
  
    constructor({ auteur, titre, description = '', etat = EtatTicket.OUVERT }) {
      if (!auteur) throw new Error('Auteur obligatoire');
      if (!titre || titre.length > 50) {
        throw new Error('Titre obligatoire, max 50 caractères');
      }
  
      this.id = ++Ticket.lastId;
      this.auteur = auteur;
      this.titre = titre;
      this.description = description;
      this.etat = etat;
      this.creation = new Date();
  
      const pad = (n) => n.toString().padStart(2, '0');
      const d = this.creation;
      const day = pad(d.getDate());
      const month = pad(d.getMonth() + 1);
      const year = d.getFullYear();
      const hours = pad(d.getHours());
      const mins = pad(d.getMinutes());
      const secs = pad(d.getSeconds());
      this.dateCreation = `${day}/${month}/${year} ${hours}:${mins}:${secs}`;
    }
  }
  
  module.exports = { Ticket, EtatTicket };
  