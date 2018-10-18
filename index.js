const express = require ('express');
const mongoose = require ('mongoose');
const keys = require ('./config/keys');
require ('./services/passport');

mongoose.connect (keys.mongoURI);

const app = express ();

require ('./routes/authRoutes') (app);
//npm run dev - nodemon

//Route handler  Test route
// app.get('/', (req, res) => {
//     res.send({buy:'buddy'});
// });

//Dynamic production Env (Heroku) or developement emv
const PORT = process.env.PORT || 5000;
app.listen (PORT);
