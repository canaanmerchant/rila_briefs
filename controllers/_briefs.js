const Brief = require('../models/_brief');

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
  const brief = new Brief(req.body.title);
  brief.save();
  res.redirect('/');
};

exports.getBriefs = (req, res, next) => {
  Brief.fetchAll(briefs => {
    res.render('brief', {
      briefs: briefs,
      pageTitle: 'Briefs',
      path: '/',
      hasBriefs: briefs.length > 0,
      activeShop: true,
      briefCSS: true
    });
  });
};
