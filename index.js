require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 4002;

app.listen(port, async () => {
  console.log(`Listening on port ${port}`);
});
