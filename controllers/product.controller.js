const Product = require ('../models/product.model');

exports.createProduct = function(req, res) {
	let product = new Product(
			{
				idProduit: req.body.idProduit,
				nomProduit: req.body.nomProduit,
				descriptonProduit: req.body.descriptonProduit,
				prixHT: req.body.prixHT,
				tauxDeTVA: req.body.tauxDeTVA
			}

		);
	product.save((err) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("Product created");
		}
		res.send(product);
	});
}

exports.calculate = function(req, res) {
	Product.findById(req.params.id, function(err, product){
		if(err){
			console.log(err);
		}
		res.send(product.calculateTaxe());


	});
}

exports.getProduct = function(req, res) {
	Product.find(function(err, product){
		if(err){
			console.log(err);
		}
		res.send(product);
	});
}

exports.updateProduct = function(req, res) {
	Product.findByIdAndUpdate(req.params.id, req.body, function(err, product){
		if(err){
			console.log(err);
		}
		res.send(product);
	});
}

exports.deleteProduct = function(req, res) {
	Product.findByIdAndDelete(req.params.id, function(err, product){
		if(err){
			console.log(err);
		}
		res.send(product);
	});
}

exports.detailProduct = function(req, res) {
	Product.findById(req.params.id, function(err, product){
		if(err){
			console.log(err);
		}
		res.send(product);
	});
}


exports.deleteManyProduct = function(req, res) {
	Product.deleteMany({nomProduit: ['ASUS','LENOVO']}, function(err, product){
		if(err){
			console.log(err);
		}
		res.send(product);
	});

// 	let deleteParam = {
// 		nomProduit : req.params.nomProduit;
// 	}
// 	product.deleteMany(deleteParam, (err) => {
// 		console.log(deleteParam);
// 		if(err) {
// 			console.log(err);
// 		}
// 		res.send('Products successfully delete');
// 	})
}

exports.updateManyProduct = function(req, res) {
	Product.updateMany({nomProduit: 'HP'},{$set: {nomProduit: "HP1"}}, function(err, product){
		if(err){
			console.log(err);
		}
		res.send(product);
	});

}

