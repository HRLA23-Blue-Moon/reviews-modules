// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/reviewsDB');
// //{ useNewUrlParser: true }

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'database connection error:'));
// db.once('open', function() {
//   console.log('Now connected to the reviews DB')
// });

// module.exports = db;



const Sequelize = require('sequelize');

const connection = new Sequelize('reviewsSDC', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
  // insecureAuth: true,
})

connection.authenticate()
  .then(() => console.log('successful connection to mySQL'))
  .catch(() => console.log('error connecting to mySQL'))

  module.exports = {connection};