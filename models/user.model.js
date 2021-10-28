const {Schema, model} = require('mongoose');

const UserSchema = Schema ({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    google: {
        type: Boolean,
        default: false
    },
    country: {
        type: String,
        require: true
    },
    timeZone: {
        type: String,
        require: true
    },
    language: {
        type: String,
        require: true
    }
});

UserSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('User', UserSchema);