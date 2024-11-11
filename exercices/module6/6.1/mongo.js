import pkg from 'mongoose';
const { connect, Schema, model, connection } = pkg;

// Get the password from the command line arguments
const password = process.argv[2];

// Replace with your MongoDB connection string
const url = `mongodb+srv://hadjeraemroska:${password}@cluster0.ynskn.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`;

connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const phonebookSchema = new Schema({
  name: String,
  number: String,
});

const Phonebook = model('Phonebook', phonebookSchema);

if (process.argv.length === 3) {
  // List all entries
  Phonebook.find({}).then(result => {
    console.log('Phonebook:');
    result.forEach(entry => {
      console.log(`${entry.name} ${entry.number}`);
    });
    connection.close();
  });
} else if (process.argv.length === 5) {
  // Add a new entry
  const name = process.argv[3];
  const number = process.argv[4];

  const phonebookEntry = new Phonebook({
    name,
    number,
  });

  phonebookEntry.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`);
    connection.close();
  });
} else {
  console.log('Please provide the password, name, and number as arguments: node mongo.js <password> <name> <number>');
  connection.close();
}