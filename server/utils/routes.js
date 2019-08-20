const Cakes = require('../controllers/cakesController');

module.exports = app => {
  app.get("/cakes", Cakes.getAll);
  app.get("/cakes/:_id", Cakes.getOne);
  app.post("/cakes", Cakes.create);
  app.put("/cakes/:_id", Cakes.update);
  app.delete("/cakes/:_id", Cakes.remove);
  app.put("/cakes/review/:_id", Cakes.review);
}