const { Schema, model, default: mongoose } = require('mongoose');
const { artSchema } = require('./Art')

const artistSchema = new Schema({
  artistName: {
    type: String,
    required: true,
    trim: true,
  },
<<<<<<< HEAD
  // art: [artSchema]
=======
  art: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: artSchema
    }
  ]
>>>>>>> d2c3ecfcadcbaf8c075a5285e89033da251ce48c
  
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Artist = model('Artist', artistSchema);

module.exports = Artist;
