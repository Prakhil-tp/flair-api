import mongoose from 'mongoose'

const db = 'mongodb://localhost:27017/flair';
const secret = 'my_secret_key';
const tokenExpiry = 86400;

// Database connection setup
const dbConnection = next => {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(db, { useNewUrlParser: true}, err => {
    if(err) next(`database connection problem - ensure MongoDB is turned on or not ! : ${err}`,err);
    else next(`\nconnected to database.\n\n\turi:\t${db}`);
  });

}

export { db, secret, tokenExpiry, dbConnection }