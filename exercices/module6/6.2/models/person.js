const mongoose = require('mongoose')

// Define Schema
const phonebookSchema = new Schema({
    name: String,
    number: String,
});

phonebookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Export model
module.exports = mongoose.model('Phonebook', phonebookSchema)