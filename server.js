const express = require('express');
const app = express();

app.set('views', __dirname + '/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.get('/', (req, res) => {
  res.render('index.html');
});

app.use(express.static('public'));
app.use(express.static('scripts'));

app.listen(3000, () => {
  console.log("Express server has started on port 3000");
});
