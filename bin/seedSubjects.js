const mongoose = require("mongoose");
const User = require("../models/Subject");

mongoose
  .connect('mongodb://localhost/la-pizarra', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  // let subjects = [
  //   {
  //     title:
  //     description: 
  //     icon:
  //   },
  
  // ];

  Subject.create(subjects, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${subjects.length} subjects`)
    mongoose.connection.close()
  });
