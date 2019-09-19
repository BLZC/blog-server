var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
})

connection.connect()

connection.query('SELECT * FROM users', function(error, results, fields) {
  if (error) {
    console.log(error)
  }
  console.log('The solution is: ', results)
})
