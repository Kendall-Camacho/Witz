/* Loading the environment variables from the .env file. */
const dotenv = require('dotenv').config();
const app = require('./app');
require('./database');


// config
app.listen(app.get('port'), () => {
    console.log("server is running on port", app.get('port'));
});

