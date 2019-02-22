const http = require ('http');
const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const productController = require ('./controllers/product.controller.js');
var cors = require('cors');
const Sale = require ('./models/product.model.js');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://kevlin:susant01235@ds255924.mlab.com:55924/myproduct', (err) => {
	if(err) {
		console.log('database not connected...');
	}
	else{
		console.log('database connected');
	}
});

app.get('/', (req, res) => {
	res.send('Project my product');
});

app.get('/:name', function (req, res) {
   var name = req.params.name;
   res.send("Bonjour " + name + " Bienvenue sur votre API de gestion de catalogue produit.");
});

app.post('/api/v1/product', productController.createProduct);
app.get('/api/v1/product', productController.getProduct);
app.put('/api/v1/product/:id', productController.updateProduct);
app.delete('/api/v1/product/:id', productController.deleteProduct);
app.get('/api/v1/product/:id', productController.detailProduct);
app.delete('/api/v1/product', productController.deleteManyProduct);
app.put('/api/v1/product', productController.updateManyProduct);
app.get('/api/v1/product/calculate-taxe/:id', productController.calculate);



const port = 3000;

app.listen(port, () => {
	console.log(`Server on on port ${port}`);
});
