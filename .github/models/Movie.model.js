const { Schema, model } = require('mongoose')
const CelebrityModel = require('./Celebrity.model')

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    cast: {
      type: [Schema.Types.ObjectId],
      ref: 'CelebrityModel',
    },
  }
)

const MovieModel = model('MovieModel', movieSchema)

module.exports = MovieModel