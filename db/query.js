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

module.exports = {
  Author,
  Book,
  Index
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
