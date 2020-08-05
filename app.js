const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;
const errorController = require('./controllers/error');

const app = express();
const port = process.env.PORT || 3002;

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const briefRoutes = require('./routes/brief');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);
app.use(briefRoutes);

app.use(errorController.get404);

mongoConnect(client => {
    console.log(client);
    app.listen(port, () => console.log(`App listening on port ${port}`));
})

