const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI = 'mongodb+srv://dbadmin:xDpxa5g04Y2pMX4q@rila-briefs-vj48b.mongodb.net/briefs?retryWrites=true&w=majority';
const User = require('./models/user');


const app = express();

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
  });


const port = app.listen(process.env.PORT || 3002);

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false,
      store: store
    })
  );

  app.use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user._id)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });

const adminRoutes = require('./routes/admin');
const briefRoutes = require('./routes/brief');
const authRoutes = require('./routes/auth')


app.use('/admin', adminRoutes);
app.use(briefRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });