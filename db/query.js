var knex = require('./knex')

function Author() {
  return knex('author');
}
function Book(){
  return knex('book');
}
function Index(){
  return knex('index')
}

function authorByBookId(book_id){
 return knex('author')
   .select('author.first_name', 'author.last_name', 'author.id as author_id')
   .innerJoin('author_book', 'author.id', 'author_book.author_id')
   .where({'author_book.book_id': book_id});
}

module.exports = {
  Author,
  Book,
  Index,
  authorByBookId
};
  // getAuthorByName: function(name){
  //   return Author().where('name', name)
  //   }

  // insertNewAuthor: function(first_name, Last_name, bio, portrait){
  //   return Author().insert({
  //     first_name: first_name,
  //     last_name: last_name,
  //     bio: bio,
  //     portrait: portrait
  //   })
  // },
  // updateAuthor: function(last_name, first_name){
  //     return Author().update({
  //       book_id: book_id
  //     })
  //     .where('last_name',last_name);
  //   },
  //   deleteAuthor: function(name){
  //     return Author().where('last_name', last_name)
  //     .del();
  //   }
  // }
//},
