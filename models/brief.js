const getDb = require('../util/database').getDb;

class Brief {
  constructor(  country, 
                psg, 
                one_year_witholding, 
                practice_advisory,
                courthouse,
                pages,
                additional_psg,
                gangs,
                gang_name,
                link) {
    this.country = country;
    this.psg = psg;
    this.one_year_witholding = one_year_witholding;
    this.practice_advisory = practice_advisory;
    this.courthouse = courthouse;
    this.pages = pages;
    this.additional_psg = additional_psg;
    this.gangs = gangs;
    this.gang_name = gang_name;
    this.link = link;
  }

  save() {
    const db = getDb();
    return db
      .collection('briefs')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('briefs')
      .find()
      .toArray()
      .then(briefs => {
        console.log(briefs);
        return briefs;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Brief;
