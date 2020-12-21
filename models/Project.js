const { model, Schema } = require('mongoose');

const projectSchema = new Schema({
    name: String, 
    location: String, 
    difficulty: String,
    createdAt: String,
    username: String,
    //users : [
        //{
            //username: String, 
            //email: String
        //}
    //],
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }
})

module.exports = model('Project', projectSchema); 