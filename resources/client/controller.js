const Client = require("./model");

module.exports = {
  //TODO
  async getAll(req, res) {
    try {
      const clients = await Client.find({});
      res.send(clients);
    } catch (err) {
      res.send("Błąd: " + err);
    }
  },

  async getById(req, res) {
    try {
      const client = await Client.findOne({ _id: req.params.id });
      if (!client) return res.status(404).send("Nie znaleziono");
      res.send(client);
    } catch (err) {
      res.status(500).send("Błąd: " + err);
    }
  },

  async add(req, res) {
    try {
      const client = await Client.create(req.body);
      res.send("Pomyślnie dodano użytkownika o id: " + client._id);
    } catch (err) {
      res.send("Błąd: " + err);
    }
  },

  async update(req, res) {
    try {
      const filter = req.params.id;
      const update = req.body;
      const client = await Client.findByIdAndUpdate(filter, update);
      res.send("Pomyslnie zaktualizowano");
    } catch (err) {
      res.send("Błąd: " + err);
    }
  },

  async remove(req, res) {
    try {
      const filter = req.params.id;
      const client = await Client.findByIdAndDelete(filter);
      res.send("Usunięto");
    } catch (err) {
      res.send(err);
    }
  },

  async removeAll(req, res) {
    try {
      await Client.deleteMany({});
      res.send("Usunięto wszystkich");
    } catch (err) {
      res.send(err);
    }
  },
};
