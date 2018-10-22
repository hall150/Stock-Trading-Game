const mongoose = require ('mongoose');
const {Schema} = mongoose;
// const Schema = mongoose.Schema; eqiv to 3

const userSchema = new Schema ({
  googleId: String,
  name: String, 
});

//model class
mongoose.model ('users', userSchema);
