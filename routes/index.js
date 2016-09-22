var express = require('express');
var router = express.Router();
//onst pg = require('../db/knex_config.js')
var knex = require('../db/knex');
var query = require('../db/query')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title:'Galvanize Can Read'});
});

router.get('/author', function(req, res, next){
  query.Author().orderBy('id', 'asc')
  .then(function(data){
    res.render('author', { title:'authorStuff', author: data });
  })
});
router.get('/book', function(req, res, next){
  query.Book().orderBy('id', 'asc')
  //console.log('Book')
  .then(function(data){
    res.render('book', {title:'bookStuff', book: data});
  })
});

module.exports = router;
