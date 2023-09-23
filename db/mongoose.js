const { mongoose } = require('mongoose')


 const initDb = async () => {
    let connect_db = await mongoose.connect('mongodb://mongo-db:27017/post_db', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Mongoose connected')
    return connect_db;
 } 

module.exports = { 
    initDb
};