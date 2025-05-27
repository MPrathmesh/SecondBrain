//create user models and schemas
import mongoose, { Schema, model, mongo} from 'mongoose';

mongoose.connect("mongodb+srv://mprathamesh83:more2002@cluster0.9lg0742.mongodb.net/SecondBrain") 

const UserSchema = new Schema({ 
    username: {type : String, unique : true},
    password: String,
})

export const UserModel = model('User', UserSchema);

const ContentSchema = new Schema({
    title:String,
    link: String,
    tags : [{type : mongoose.Types.ObjectId, ref : "Tag"}],
    userId : [{type : mongoose.Types.ObjectId, ref : "User", required : true}],
})

export const ContentModel = model("Content", ContentSchema);