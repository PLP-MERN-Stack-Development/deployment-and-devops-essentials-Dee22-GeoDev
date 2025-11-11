const mongoose = require('mongoose');
const winston = require('./logger');

const connect = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    winston.error('MONGO_URI missing');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, { maxPoolSize: 10, serverSelectionTimeoutMS: 5000 });
    winston.info('MongoDB connected');
  } catch (err) {
    winston.error('MongoDB connection failed', err);
    process.exit(1);
  }
};

module.exports = { connect };
