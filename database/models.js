// const db = require('./index');
// const mongoose = require('mongoose');

// const restaurantSchema = mongoose.Schema({
//   restaurant: String
// })

// const reviewSchema = mongoose.Schema({
//   reviewData: {
//     id: String,
//     rating: Number,
//     time_created: Date,
//     text: String,
//     review_pic: String
//   },
//   user: {
//     image_url: String,
//     name: String,
//     location: String,
//     friends: Number,
//     reviews: Number,
//     photos: Number,
//     elite: Boolean
//   },
//   usefulVotes: {type: Number, default: 0},
//   funnyVotes: {type: Number, default: 0},
//   coolVotes: {type: Number, default: 0},
// })

// const Review = mongoose.model('Review', reviewSchema)
// const Restaurant = mongoose.model('Restaurant', restaurantSchema)

// module.exports = {Restaurant, Review};



const Sequelize = require('sequelize');
const {connection} = require('./index');

const Review = connection.define('Review', {
  //review data
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  rating: { type: Sequelize.INTEGER, allowNull: false },
  time_created: {type: Sequelize.DATE, allowNull: false},
  text: { type: Sequelize.STRING, allowNull: false },
  review_pic: { type: Sequelize.STRING, allowNull: false },
  //user data
  image_url: { type: Sequelize.STRING, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  location: { type: Sequelize.STRING, allowNull: false },
  friends: { type: Sequelize.INTEGER, allowNull: false },
  reviews: { type: Sequelize.INTEGER, allowNull: false },
  photos: { type: Sequelize.INTEGER, allowNull: false },
  elite: { type: Sequelize.BOOLEAN, allowNull: false },
  //button data
  usefulVotes: {type: Sequelize.INTEGER, defaultValue: 0},
  funnyVotes: {type: Sequelize.INTEGER, defaultValue: 0},
  coolVotes: {type: Sequelize.INTEGER, defaultValue: 0},
})




connection.sync({force: false})
.then(() => console.log('successfully synced MySQL database'))
.catch(err => console.log('failed to sync MySQL database', err))

module.exports = { Review};