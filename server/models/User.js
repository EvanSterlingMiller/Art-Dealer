const { Schema, model, default: mongoose  } = require('mongoose');
const { artSchema } = require('./Art')
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // thoughts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Thought',
  //   },

  // ],
<<<<<<< HEAD
  // purchasedArt: [artSchema],
  firstName:{
=======
  purchasedArt: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: artSchema
    }
  ],
  firstName: {
>>>>>>> d2c3ecfcadcbaf8c075a5285e89033da251ce48c
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  // artDetails: [artSchema],
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
