const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');


let ProductSchema = new Schema ({
	idProduit: Number,
	nomProduit: String,
	descriptonProduit: String,
	prixHT: Number,
	tauxDeTVA: Number
});

ProductSchema.method({
    calculateTaxe: function () {
    	const calcule = this.prixHT + (this.prixHT *  this.tauxDeTVA / 100);
    	var text = "Nom du produit : " + this.nomProduit + " => prix HT : " + this.prixHT + " => taux de TVA : " + this.tauxDeTVA + " => prix TTC : " + calcule + " (" +new Date() + ")";

    	fs.appendFile("./tmp/log.txt", text, function(err) {
    	if(err) {
        	console.log(err);
    	}

    	console.log("The file was saved!");
		}); 
    	return text;
    	
    }
});



module.exports = mongoose.model('Product', ProductSchema);