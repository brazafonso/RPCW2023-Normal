var express = require('express');
var router = express.Router();
var CONTRATO = require('../controllers/contratos')



router.get('/contracts', function(req, res, next) {
  var inst = req.query.inst
  var year = req.query.year
  if(inst){
    console.log('GET /contract/inst')
    CONTRATO.list_all_inst(inst)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
  });
  }else if(year){
    console.log('GET /contract/year')
    CONTRATO.list_all_year(year)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
  });
  }
  else{
    console.log('Simple')
    CONTRATO.list()
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json(err);
});
  }
    

})


router.get('/contracts/courses', function(req, res, next) {
  CONTRATO.get_distinct_courses()
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json(err);
});
})

router.get('/contracts/institutions', function(req, res, next) {
  CONTRATO.get_distinct_institutions()
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json(err);
});
})



router.get('/contracts/:id', function(req, res, next) {
  console.log('GET /contract')
  id = req.params.id;
  CONTRATO.get_contract(id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json(err);
});
})




router.post('/contracts', function(req, res, next) {
  contract = req.body;
  CONTRATO.put_contract(contract)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json(err);
});
})


router.delete('/contracts/:id', function(req, res, next) {
  id = req.params.id
  CONTRATO.delete_contract(id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json(err);
});
})

module.exports = router;
