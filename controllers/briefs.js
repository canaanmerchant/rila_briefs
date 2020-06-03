const Brief = require('../models/brief');

exports.getBriefs = (req, res, next) => {
  Brief.fetchAll()
    .then(briefs => {
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
    const brief = new Brief(req.body.title,
                            req.body.country,
                            req.body.psg,
                            req.body.one_year_withholding,
                            req.body.withholding_only,
                            req.body.practice_advisory,
                            req.body.courthouse,
                            req.body.pages,
                            req.body.additional_psg,
                            req.body.gangs,
                            req.body.gang_name,
                            req.body.link);
    brief.save();
    res.redirect('/');
  };

