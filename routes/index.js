var express = require('express');
var router = express.Router();
var reclamoController = require('../controllers/reclamoController');



/* GET home page. */

router.get('/',reclamoController.principal);
router.get('/registroReclamo',reclamoController.registroReclamo);
router.post('/guardarReclamo',reclamoController.guardarReclamo);

/*router.get('/', function(req, res, next) {
  res.render('index',{title:'Proyecto Final', 
  					subtitle:'Avances en computacion',
  					reclamo:reclamo });
			}
	);

router.get('/registroReclamo', function(req, res, next) {
  res.render('registroReclamo',{reclamo: reclamo });
});
*/
module.exports = router;
