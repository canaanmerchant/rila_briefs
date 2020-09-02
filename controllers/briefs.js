const Brief = require('../models/brief');
const brief = require('../models/brief');

exports.getBriefs = (req, res, next) => {
  Brief.find()
    .then(briefs => {
      res.render('brief', {
        Brief: briefs,
        pageTitle: 'All Briefs',
        path: '/',

      });
    })
    .catch(err => {
      console.log(err);
    });
};



exports.getAddBrief = (req, res, next) => {
    res.render('add-brief', {
      pageTitle: 'Add Brief',
      path: '/add-brief',
      editing: false
    });
  };

  exports.getEditBrief = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const briefId = req.params.briefId;
    
      Brief.findById(briefId)
      .then(brief => {
        
        if (!brief) {
          return res.redirect('/');
        }
        res.render('edit-brief', {
          pageTitle: 'Edit Brief',
          path: '/edit-brief',
          editing: editMode,
          brief: brief
        });
      })
      .catch(err => console.log(err));
  };





  exports.postAddBrief = (req, res, next) => {
      
      const brief_title = req.body.brief_title;
 
      const country = req.body.country;
      const psg = req.body.psg;
      const one_year_withholding = req.body.one_year_withholding;
      const withholding_only = req.body.withholding_only;
      const practice_advisory = req.body.practice_advisory;
      const courthouse = req.body.courthouse;
      const pages = req.body.pages;
      const additional_psg = req.body.additional_psg;
      const gangs = req.body.gangs;
      const gang_name = req.body.gang_name;
      const link = req.body.link;
     
      const brief = new Brief({
                          brief_title: brief_title,
  
                          country: country, 
                          psg: psg,
                          one_year_withholding: one_year_withholding,
                          withholding_only: withholding_only, 
                          practice_advisory: practice_advisory,
                          courthouse: courthouse,
                          pages: pages,
                          additional_psg: additional_psg,
                          gangs: gangs,
                          gang_name: gang_name,
                          link: link
      });
    brief.save()
    .then(result => {
      console.log('added Brief');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
    
  };
  
  exports.postEditBrief = (req, res, next) => {
    const briefId = req.body.briefId;
    const updated_brief_title = req.body.brief_title;
    const updated_country = req.body.country;
    const updated_psg = req.body.psg;
    const updated_one_year_withholding = req.body.one_year_withholding;
    const updated_withholding_only = req.body.withholding_only;
    const updated_practice_advisory = req.body.practice_advisory;
    const updated_courthouse = req.body.courthouse;
    const updated_pages = req.body.pages;
    const updated_additional_psg = req.body.additional_psg;
    const updated_gangs = req.body.gangs;
    const updated_gang_name = req.body.gang_name;
    const updated_link = req.body.link;

    Brief.findByIdAndUpdate(briefId)
      .then(brief => {
      
        brief.brief_title = updated_brief_title;
        brief.country = updated_country;
        brief.psg = updated_psg;
        brief.one_year_withholding = updated_one_year_withholding;
        brief.withholding_only = updated_withholding_only;
        brief.practice_advisory = updated_practice_advisory;
        brief.courthouse = updated_courthouse;
        brief.pages = updated_pages;
        brief.additional_psg = updated_additional_psg;
        brief.gangs = updated_gangs;
        brief.gang_name = updated_gang_name;
        brief.link = updated_link;
        return brief.save();
      })
      .then(result => {
          console.log("brief Updated");
      res.redirect('/');
    })
    .catch(err => console.log(err)); 
};

// exports.postEditBrief = (req, res, next) => {
//   const briefId = req.body.briefId;
//   let update = {
//     brief_title: req.body.brief_title,
//     country: req.body.country,
//     psg: req.body.psg,
//     one_year_withholding: req.body.one_year_withholding,
//     withholding_only: req.body.withholding_only,
//     practice_advisory: req.body.practice_advisory,
//     courthouse: req.body.courthouse,
//     pages: req.body.pages,
//     additional_psg: req.body.additional_psg,
//     gangs: req.body.gangs,
//     gang_name: req.body.gang_name,
//     link: req.body.link
//   }

//   Brief.findOneAndUpdate(briefId, {$set:update})
//     .then(result => {
//       console.log(result);
//       res.redirect('/');
//     })
//     .catch(err => console.log(err));
// };