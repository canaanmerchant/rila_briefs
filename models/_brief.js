const fs = require('fs');
const path = require('path');

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'briefs';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

 
// });




const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'briefs.json'
);

// const getBriefsFromDB = function(db, callback) {

//   const dbClient = client.db(dbName);
//   // Get the documents collection
//   const collection = dbClient.collection('briefs');
//   // Find some documents
//   collection.find({}).toArray(function(err, briefs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(briefs);
//     return callback(briefs);
   
//   });
//}

const getBriefsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Brief {
  constructor(t) {
    this.title = t;
  }

  save() {
    getBriefsFromFile(briefs => {
      briefs.push(this);
      fs.writeFile(p, JSON.stringify(briefs), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getBriefsFromFile(cb);
  }
};
