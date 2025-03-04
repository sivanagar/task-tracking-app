import mongoose from 'mongoose';
import  bcrypt  from "bcryptjs";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        
    },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
          ],
            },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task',
        },
    ]
},
{
    toJSON: {
        virtuals: true,
    },
}
);
//set up pre-save middleware to create password
UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

//compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// get total count of listings on retrieval
UserSchema.virtual('taskCount').get(function () {
    return this.tasks.length;
});



const User = mongoose.model('User', UserSchema);

export default User;