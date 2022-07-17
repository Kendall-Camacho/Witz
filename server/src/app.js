const express = require('express');
const cors = require('cors');
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// config
app.set('port', process.env.PORT || 3007);

// routes
app.use('/api/posts', require('./routes/post.routes'));
app.use('/api/users', require('./routes/user.routes'));

module.exports = app; 