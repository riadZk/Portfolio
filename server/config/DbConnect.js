const mongoose = require('mongoose');
function dbConnect() {
    try {
        mongoose.connect(process.env.URL_MONGODB);
        console.log('Connecting to Database')
    } catch (error) {
        console.log('Error Connect ',error)
    }
}
module.exports = dbConnect;