var express = require('express');
var router = express.Router();
var Faker = require('Faker');

/* GET home page. */
router.get('/', function(req, res, next) {
  req.models.user.count().then(function (count) {
    if(count > 0){
      req.models.user.find().then(function(data){
        res.render('index', { name: data[0].name, email: data[0].email });
      }).catch(function(err){
        next(err)
      });
    } else {
      var dataToSave = {
        name: Faker.Name.findName(),
        email: Faker.Internet.email()
      };
      req.models.user.create(dataToSave).then(function (data) {
        res.render('index', {name: data.name, email: data.email});
      }).catch(function (err) {
        next(err)
      });
    }
  }).catch(function(err){
    next(err);
  });

});

module.exports = router;
