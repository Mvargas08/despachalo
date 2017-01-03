var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commune = new Schema({
	// Despachalo
	idDSPL: String,
	nameDSPL: String,
	idProvinceDSPL: String,
	// Chilexpress
	idCXP: String,
	nameCXP: String,
	idRegionCXP: String,
	// Correos de Chile
	idCDCH: String,
	nameCDCH: String,
	idRegionCDCH: String,
	// FEDEX
	idFDX: String,
	nameFDX: String,
	idRegionFDX: String,
	// DHL
	idDHL: String,
	nameDHL: String,
	idRegionDHL: String
});

module.exports = mongoose.model('Commune', commune);