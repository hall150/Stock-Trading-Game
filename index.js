const express = require('express');
const app = express();

//Route handler 
app.get('/', (req, res) => {
    res.send({buy:'buddy'});
});

//Dynamic production Env (Heroku) or developement emv
const PORT = process.env.PORT || 5000;
app.listen(PORT);  