module.exports = {
  getHouses: async (req, res) => {
    const db = req.app.get("db");
    let casas = await db.get_all_houses();
    res.status(200).send(casas);
  },
  addHouses: async (req, res) => {
    const {
      name,
      address,
      city,
      state,
      zip,
      img,
      rent_amount,
      mortgage
    } = req.body;
    const db = req.app.get("db");
    let houses = await db.add_houses([
      name,
      address,
      city,
      state,
      zip,
      img,
      rent_amount,
      mortgage
    ]);
    res.status(200).send(houses);
  },
  delete: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete_houses(id).then(result => {
      res.status(200).send(result);
    });
  }
};
