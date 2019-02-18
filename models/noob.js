const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const noobSchema = new Schema({
  id: ObjectId,
  name: String,
  availStart: Number,
  availEnd: Number
});

module.exports = mongoose.model("Noob", noobSchema);