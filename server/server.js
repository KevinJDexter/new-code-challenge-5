const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const messageRouter = require('./routes/message.router');

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/message', messageRouter);

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})