var express = require('express');
var router = express.Router();
var objeto={title:'Avances en Computacion', visitante:'pepito',semestre:'octavo'};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', objeto);
});

module.exports = router;
