var express = require('express');
var router = express.Router();
var axios = require('axios')


var api = "http://127.0.0.1:15015/contracts"

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(api)
  .then(function(response) {
    contratos = response.data
    res.render('index', { contratos:contratos });
  })
  .catch(function(err) {
    res.render('error', { error: err });
  })
});

router.get('/:id', function(req, res, next) {
  id = req.params.id
  axios.get(api + '/' + id)
  .then(function(response) {
    contrato = response.data[0]
    res.render('contrato', { contrato:contrato });
  })
  .catch(function(err) {
    res.render('error', { error: err });
  })
});

router.get('/inst/:nipc', function(req, res, next) {
  nipc = req.params.nipc
  axios.get(api + '?inst=' + nipc)
  .then(function(response) {
    contratos = response.data
    instituicao = contratos[0].NomeInstituicao
    nipc = contratos[0].NIPCInstituicao
    res.render('instituicao', { instituicao:instituicao, nipc:nipc,contratos:contratos });
  })
  .catch(function(err) {
    res.render('error', { error: err });
  })
});


module.exports = router;
