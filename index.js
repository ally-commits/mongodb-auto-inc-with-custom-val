const mongoose = require('mongoose');    
const Part = require('./models/Part')
const Product = require('./models/Product')
 



const connection = mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true ,useFindAndModify: false})  

const func = async () => {
    const part = await Part.create({
        title: "PArt new"
    })

    const product = await Product.create({
        title: "Product new"
    })

    console.log(part)
    console.log(product)
}

func()