const mongoose = require('mongoose');

/* Getting the MongoDB URI from the environment variables. */
const MONGO_URI = process.env.MONGO_URI;

/* Connecting to the MongoDB database. */
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  ./* a promise. It is a way to handle asynchronous code. */
  then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = mongoose;