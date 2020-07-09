const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// ROUTES
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');
const cardRoutes = require('./routes/card');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/card', cardRoutes);

const PORT = process.env.PORT || 3000;

const url =
  'mongodb+srv://Pecherskiy:4835jpPmZp0OThiB@cluster0.z1nqv.mongodb.net/<dbname>?retryWrites=true&w=majority';

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
