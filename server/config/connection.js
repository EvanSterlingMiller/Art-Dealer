const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const mongoose = require('mongoose');
console.log('Loaded MONGODB_URI:', process.env.MONGODB_URI);

mongoose.connect(
  process.env.MONGODB_URI 
);

module.exports = mongoose.connection;
