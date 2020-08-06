const Brief = require('../models/brief');

exports.getBriefs = (req, res, next) => {
  Brief.find()
    .then(briefs => {
      console.log(briefs);
      res.render('brief', {
        Brief: briefs,
        pageTitle: 'All Briefs',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAddBrief = (req, res, next) => {
    res.render('add-brief', {
      pageTitle: 'Add Brief',
      path: '/admin/add-brief',
      formsCSS: true,
      briefCSS: true,
      activeAddBrief: true
    });
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

