const mongoose = require('mongoose');
const { tallySchema } = require('./schema');

const mongoURI = "mongodb://127.0.0.1/covidtally";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection established with MongoDB server online");
  })
  .catch(err => {
    console.log("Error while connecting to MongoDB:", err);
  });

const collection_connection = mongoose.model('covidtally', tallySchema);

exports.connection = collection_connection;