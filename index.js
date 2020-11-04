const mongoose = require('mongoose');   
const Part = require('./models/Part')
const Product = require('./models/Product')
const Order = require('./models/Order')



const dbURI = 'mongodb+srv://ally:Asd@1234@cluster0.e694a.mongodb.net/temp-one?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    .then(async (result) => {

        // const addPart = await Part.create({
        //     title: 'Part Two', 
        // });
 
    
        // const addProduct = await Product.create({
        //     title: 'Product Two', 
        // });
     
    
        const addOrder = await Order.create({
            title: 'New Order',
            allLoad: [
                {
                    id: "5fa2509c3fec6b38d8e7a483",
                    onModal: "part"
                }, 
                {
                    id: "5fa2509c3fec6b38d8e7a484",
                    onModal: "product"
                },
            ],
        });


        const orders = await Order.find().populate('allLoad.id');
        console.log(orders[0].allLoad)


    })
    .catch((err) => console.log(err));
  