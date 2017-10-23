const mongoose = require('mongoose');

// Define Schemes
const todoSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  content: { type: String, required: true },
  completed: { type: String, default: false }
},
{
  timestamps: true
});

// Create new todo document
todoSchema.statics.create = function (payload) {
  // this === Model
  const todo = new this(payload);
  // return Promise
  return todo.save();
};

// Find All
todoSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by todoid
todoSchema.statics.findOneByTodoid = function (id) {
  return this.findOne({ id });
};

// Update by todoid
todoSchema.statics.updateByTodoid = function (id, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ id }, payload, { new: true });
};

// Delete All
todoSchema.statics.deleteAll = function () {
  return this.remove({});
};

// Delete by todoid
todoSchema.statics.deleteByTodoid = function (id) {
  return this.remove({ id });
};

// Create Model & Export
module.exports = mongoose.model('Todo', todoSchema);
