const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use('/admin/', adminRoutes);
app.use(shopRoutes);
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);