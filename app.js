const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoose = require('mongoose');




const app = express();
const port = 3002;

app.set('view engine', 'ejs');
app.set('views', 'views');






app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');
const briefRoutes = require('./routes/brief');
const authRoutes = require('./routes/auth')


app.use('/admin', adminRoutes);
app.use(briefRoutes);
app.use(authRoutes);

app.use(errorController.get404);



mongoose.connect('mongodb://localhost:27017/briefs'//'mongodb+srv://dbadmin:xDpxa5g04Y2pMX4q@rila-briefs-vj48b.mongodb.net/briefs?retryWrites=true&w=majority'
)
.then(result => {
    app.listen(port);
})
.catch(err => {
    console.log(err);
});