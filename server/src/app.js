const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}));


// config
app.set('port', process.env.PORT || 3007);

// routes
app.use('/api/posts', require('./routes/post.routes'));
app.use('/api/users', require('./routes/user.routes'));

module.exports = app; 