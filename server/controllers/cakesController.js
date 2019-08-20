const Cake = require('mongoose').model('Cake');

class CakeController {
  getAll(req, res){
    Cake.find({}).sort({createdAt: -1})
          .then(cakes => res.json(cakes))
          .catch(err => res.json(err));
  }
  getOne(req, res){
    Cake.findOne({_id: req.params._id})
          .then(cake => res.json(cake))
          .catch(err => res.json(err));
  }
  create(req, res){
      let c = new Cake(req.body);
      c.save()
          .then(() => res.json({status: "ok"}))
          .catch(err => res.json(err));
  }
  update(req, res){
    Cake.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
          .then(() => res.json({status: "update successful"}))
          .catch(err => res.json(err));
  }
  remove(req, res){
    Cake.findOneAndDelete({_id: req.params._id})
          .then(() => res.json({status: "ok"}))
          .catch(err => res.json(err));
  }
  review(req, res){
    Cake.findOneAndUpdate({_id: req.params._id}, {$push: { reviews: {ratings: req.body.ratings, comment: req.body.comment} }},  {runValidators: true})
          .then(() => res.json({status: "review added"}))
          .catch(err => res.json(err));
    
  }
}

module.exports = new CakeController();