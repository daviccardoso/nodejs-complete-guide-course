const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const express = require('express');
const app = express();

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use('/admin/', adminRoutes);
app.use(shopRoutes);
app.use((req, res) => {
  res.status(404);
  res.send('<h1>Page not found. :(</h1>');
})

app.listen(3000);