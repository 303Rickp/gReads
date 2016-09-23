var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var query = require('../db/query')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
// all author page
router.get('/author', function(req, res, next){
  query.Author().orderBy('id', 'asc')
  .then(function(author){
    res.render('author', {  author: author });
  })
});
//all book page
router.get('/book', function(req, res, next){
  query.Book().orderBy('id', 'asc')
  .then(function(book){
    res.render('book', {book: book});
  })
});

module.exports = router;
