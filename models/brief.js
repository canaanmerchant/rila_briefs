const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const briefSchema = new Schema({
            brief_title: String,
            country: String, 
            psg: String,
            one_year_withholding: String,
            withholding_only: String, 
            practice_advisory: String,
            courthouse: String,
            pages: Number,
            additional_psg: String,
            gangs: String,
            gang_name: String,
            link: String
          });

 module.exports = mongoose.model('Brief', briefSchema); 


// const getDb = require('../util/database').getDb;

// class Brief {
//   constructor(  brief_title,
//                 country, 
//                 psg, 
//                 one_year_withholding, 
//                 withholding_only,
//                 practice_advisory,
//                 courthouse,
//                 pages,
//                 additional_psg,
//                 gangs,
//                 gang_name,
//                 link) {
//     this.brief_title = brief_title;
//     this.country = country;
//     this.psg = psg;
//     this.one_year_withholding = one_year_withholding;
//     this.withholding_only = withholding_only;
//     this.practice_advisory = practice_advisory;
//     this.courthouse = courthouse;
//     this.pages = pages;
//     this.additional_psg = additional_psg;
//     this.gangs = gangs;
//     this.gang_name = gang_name;
//     this.link = link;
//   }

//   save() {
//     const db = getDb();
//     return db
//       .collection('briefs')
//       .insertOne(this)
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection('briefs')
//       .find()
//       .toArray()
//       .then(briefs => {
//         console.log(briefs);
//         return briefs;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
// }

// module.exports = Brief;
