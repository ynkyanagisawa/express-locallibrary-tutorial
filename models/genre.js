var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema (
    {
        name: {type: String, min:3, max:100},
    }

);

// Virtual for bookinstance's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre',GenreSchema);