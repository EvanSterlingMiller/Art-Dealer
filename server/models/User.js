const { Schema, model, default: mongoose  } = require('mongoose');
const { artSchema } = require('./Art')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^[a-zA-Z0-9_]{3,20}$/, 'Username must be 3–20 characters long and contain only letters, numbers, or underscores.'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match a valid email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, 'Password must be at least 8 characters and include letters and numbers.'],
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    match: [/^[a-zA-Z\s'.-]{1,40}$/, 'First name contains invalid characters.'],
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    match: [/^[a-zA-Z\s'.-]{1,40}$/, 'Last name contains invalid characters.'],
  },
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
