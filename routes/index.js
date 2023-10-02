var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nindya' });
});
router.get('/profil', function(req, res) {
  res.render('profil', 
  {nama: 'Nindya Filza', 'npm':2125240141}
  );
});

module.exports = router;
