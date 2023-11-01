const mongoose = require('mongoose')

const connectDatabase =  async () => {
    console.log('Trying to connect to MongoDB Atlas')
    await mongoose.connect('mongodb+srv://root:root@cluster0.nkirztx.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Atlas connected')).catch((error) => console.log(error))
}

module.exports = connectDatabase