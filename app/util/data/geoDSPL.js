module.exports = {
  setCommunes: setCommunes,
  setProvinces: setProvinces,
  setRegions: setRegions
};

function setRegions(regDSPL){
	regDSPL.push({'idDSPL': '1', 'nameDSPL':'Tarapacá','idOrdinalDSPL':'I'});
	regDSPL.push({'idDSPL': '2', 'nameDSPL':'Antofagasta','idOrdinalDSPL':'II'});
	regDSPL.push({'idDSPL': '3', 'nameDSPL':'Atacama','idOrdinalDSPL':'III'});
	regDSPL.push({'idDSPL': '4', 'nameDSPL':'Coquimbo','idOrdinalDSPL':'IV'});
	regDSPL.push({'idDSPL': '5', 'nameDSPL':'Valparaiso','idOrdinalDSPL':'V'});
	regDSPL.push({'idDSPL': '6', 'nameDSPL':'Libertador','idOrdinalDSPL':'VI'});
	regDSPL.push({'idDSPL': '7', 'nameDSPL':'Maule','idOrdinalDSPL':'VII'});
	regDSPL.push({'idDSPL': '8', 'nameDSPL':'Biobío','idOrdinalDSPL':'VIII'});
	regDSPL.push({'idDSPL': '9', 'nameDSPL':'La Araucanía','idOrdinalDSPL':'IX'});
	regDSPL.push({'idDSPL': '10', 'nameDSPL':'Los Lagos','idOrdinalDSPL':'X'});
	regDSPL.push({'idDSPL': '11', 'nameDSPL':'Aisén','idOrdinalDSPL':'XI'});
	regDSPL.push({'idDSPL': '12', 'nameDSPL':'Magallanes','idOrdinalDSPL':'XII'});
	regDSPL.push({'idDSPL': '13', 'nameDSPL':'Region Metropolitana','idOrdinalDSPL':'RM'});
	regDSPL.push({'idDSPL': '14', 'nameDSPL':'Los Ríos','idOrdinalDSPL':'XIV'});
	regDSPL.push({'idDSPL': '15', 'nameDSPL':'Arica y Parinacota', 'idOrdinalDSPL':'XV'});
	for (var i=0; i < regDSPL.length; i++) {
		regDSPL[i].nameDSPL = regDSPL[i].nameDSPL.toUpperCase();
	}
	return regDSPL;
}

function setProvinces(provDSPL){
	provDSPL.push({'idDSPL':'1', 'nameDSPL':'Arica', 'idRegionDSPL': 'XV'});
	provDSPL.push({'idDSPL':'2', 'nameDSPL':'Parinacota', 'idRegionDSPL': 'XV'});
	provDSPL.push({'idDSPL':'3', 'nameDSPL':'Iquique', 'idRegionDSPL': 'I'});
	provDSPL.push({'idDSPL':'4', 'nameDSPL':'El Tamarugal', 'idRegionDSPL': 'I'});
	provDSPL.push({'idDSPL':'5', 'nameDSPL':'Antofagasta', 'idRegionDSPL': 'II'});
	provDSPL.push({'idDSPL':'6', 'nameDSPL':'El Loa', 'idRegionDSPL': 'II'});
	provDSPL.push({'idDSPL':'7', 'nameDSPL':'Tocopilla', 'idRegionDSPL': 'II'});
	provDSPL.push({'idDSPL':'8', 'nameDSPL':'Chañaral', 'idRegionDSPL': 'III'});
	provDSPL.push({'idDSPL':'9', 'nameDSPL':'Copiapó', 'idRegionDSPL': 'III'});
	provDSPL.push({'idDSPL':'10', 'nameDSPL':'Huasco', 'idRegionDSPL': 'III'});
	provDSPL.push({'idDSPL':'11', 'nameDSPL':'Choapa', 'idRegionDSPL': 'IV'});
	provDSPL.push({'idDSPL':'12', 'nameDSPL':'Elqui', 'idRegionDSPL': 'IV'});
	provDSPL.push({'idDSPL':'13', 'nameDSPL':'Limarí', 'idRegionDSPL': 'IV'});
	provDSPL.push({'idDSPL':'14', 'nameDSPL':'Isla de Pascua', 'idRegionDSPL': 'V'});
	provDSPL.push({'idDSPL':'15', 'nameDSPL':'Los Andes', 'idRegionDSPL': 'V'});
	provDSPL.push({'idDSPL':'16', 'nameDSPL':'Petorca', 'idRegionDSPL': 'V'});
	provDSPL.push({'idDSPL':'17', 'nameDSPL':'Quillota', 'idRegionDSPL': 'V'});
	provDSPL.push({'idDSPL':'18', 'nameDSPL':'San Antonio', 'idRegionDSPL': 'V'});
	provDSPL.push({'idDSPL':'19', 'nameDSPL':'San Felipe de Aconcagua', 'idRegionDSPL': 'V'});
	provDSPL.push({'idDSPL':'20', 'nameDSPL':'Valparaiso', 'idRegionDSPL': 'V'});
	provDSPL.push({'idDSPL':'21', 'nameDSPL':'Chacabuco', 'idRegionDSPL': 'RM'});
	provDSPL.push({'idDSPL':'22', 'nameDSPL':'Cordillera', 'idRegionDSPL': 'RM'});
	provDSPL.push({'idDSPL':'23', 'nameDSPL':'Maipo', 'idRegionDSPL': 'RM'});
	provDSPL.push({'idDSPL':'24', 'nameDSPL':'Melipilla', 'idRegionDSPL': 'RM'});
	provDSPL.push({'idDSPL':'25', 'nameDSPL':'Santiago', 'idRegionDSPL': 'RM'});
	provDSPL.push({'idDSPL':'26', 'nameDSPL':'Talagante', 'idRegionDSPL': 'RM'});
	provDSPL.push({'idDSPL':'27', 'nameDSPL':'Cachapoal', 'idRegionDSPL': 'VI'});
	provDSPL.push({'idDSPL':'28', 'nameDSPL':'Cardenal Caro', 'idRegionDSPL': 'VI'});
	provDSPL.push({'idDSPL':'29', 'nameDSPL':'Colchagua', 'idRegionDSPL': 'VI'});
	provDSPL.push({'idDSPL':'30', 'nameDSPL':'Cauquenes', 'idRegionDSPL': 'VII'});
	provDSPL.push({'idDSPL':'31', 'nameDSPL':'Curicó', 'idRegionDSPL': 'VII'});
	provDSPL.push({'idDSPL':'32', 'nameDSPL':'Linares', 'idRegionDSPL': 'VII'});
	provDSPL.push({'idDSPL':'33', 'nameDSPL':'Talca', 'idRegionDSPL': 'VII'});
	provDSPL.push({'idDSPL':'34', 'nameDSPL':'Arauco', 'idRegionDSPL': 'VIII'});
	provDSPL.push({'idDSPL':'35', 'nameDSPL':'Bio Bío', 'idRegionDSPL': 'VIII'});
	provDSPL.push({'idDSPL':'36', 'nameDSPL':'Concepción', 'idRegionDSPL': 'VIII'});
	provDSPL.push({'idDSPL':'37', 'nameDSPL':'Ñuble', 'idRegionDSPL': 'VIII'});
	provDSPL.push({'idDSPL':'38', 'nameDSPL':'Cautín', 'idRegionDSPL': 'IX'});
	provDSPL.push({'idDSPL':'39', 'nameDSPL':'Malleco', 'idRegionDSPL': 'IX'});
	provDSPL.push({'idDSPL':'40', 'nameDSPL':'Valdivia', 'idRegionDSPL': 'XIV'});
	provDSPL.push({'idDSPL':'41', 'nameDSPL':'Ranco', 'idRegionDSPL': 'XIV'});
	provDSPL.push({'idDSPL':'42', 'nameDSPL':'Chiloé', 'idRegionDSPL': 'X'});
	provDSPL.push({'idDSPL':'43', 'nameDSPL':'Llanquihue', 'idRegionDSPL': 'X'});
	provDSPL.push({'idDSPL':'44', 'nameDSPL':'Osorno', 'idRegionDSPL': 'X'});
	provDSPL.push({'idDSPL':'45', 'nameDSPL':'Palena', 'idRegionDSPL': 'X'});
	provDSPL.push({'idDSPL':'46', 'nameDSPL':'Aisén', 'idRegionDSPL': 'XI'});
	provDSPL.push({'idDSPL':'47', 'nameDSPL':'Capitán Prat', 'idRegionDSPL': 'XI'});
	provDSPL.push({'idDSPL':'48', 'nameDSPL':'Coihaique', 'idRegionDSPL': 'XI'});
	provDSPL.push({'idDSPL':'49', 'nameDSPL':'General Carrera', 'idRegionDSPL': 'XI'});
	provDSPL.push({'idDSPL':'50', 'nameDSPL':'Antártica Chilena', 'idRegionDSPL': 'XII'});
	provDSPL.push({'idDSPL':'51', 'nameDSPL':'Magallanes', 'idRegionDSPL': 'XII'});
	provDSPL.push({'idDSPL':'52', 'nameDSPL':'Tierra del Fuego', 'idRegionDSPL': 'XII'});
	provDSPL.push({'idDSPL':'53', 'nameDSPL':'Última Esperanza', 'idRegionDSPL': 'XII'});
	for (var i=0; i < provDSPL.length; i++) {
		provDSPL[i].nameDSPL = provDSPL[i].nameDSPL.toUpperCase();
	}
	return provDSPL;
}

function setCommunes(comDSPL) {
	comDSPL.push({'idDSPL':'1', 'nameDSPL':'Arica', 'idProvinceDSPL': '1'});
	comDSPL.push({'idDSPL':'2', 'nameDSPL':'Camarones', 'idProvinceDSPL': '1'});
	comDSPL.push({'idDSPL':'3', 'nameDSPL':'General Lagos', 'idProvinceDSPL': '2'});
	comDSPL.push({'idDSPL':'4', 'nameDSPL':'Putre', 'idProvinceDSPL': '2'});
	comDSPL.push({'idDSPL':'5', 'nameDSPL':'Alto Hospicio', 'idProvinceDSPL': '3'});
	comDSPL.push({'idDSPL':'6', 'nameDSPL':'Iquique', 'idProvinceDSPL': '3'});
	comDSPL.push({'idDSPL':'7', 'nameDSPL':'Camiña', 'idProvinceDSPL': '4'});
	comDSPL.push({'idDSPL':'8', 'nameDSPL':'Colchane', 'idProvinceDSPL': '4'});
	comDSPL.push({'idDSPL':'9', 'nameDSPL':'Huara', 'idProvinceDSPL': '4'});
	comDSPL.push({'idDSPL':'10', 'nameDSPL':'Pica', 'idProvinceDSPL': '4'});
	comDSPL.push({'idDSPL':'11', 'nameDSPL':'Pozo Almonte', 'idProvinceDSPL': '4'});
	comDSPL.push({'idDSPL':'12', 'nameDSPL':'Antofagasta', 'idProvinceDSPL': '5'});
	comDSPL.push({'idDSPL':'13', 'nameDSPL':'Mejillones', 'idProvinceDSPL': '5'});
	comDSPL.push({'idDSPL':'14', 'nameDSPL':'Sierra Gorda', 'idProvinceDSPL': '5'});
	comDSPL.push({'idDSPL':'15', 'nameDSPL':'Taltal', 'idProvinceDSPL': '5'});
	comDSPL.push({'idDSPL':'16', 'nameDSPL':'Calama', 'idProvinceDSPL': '6'});
	comDSPL.push({'idDSPL':'17', 'nameDSPL':'Ollague', 'idProvinceDSPL': '6'});
	comDSPL.push({'idDSPL':'18', 'nameDSPL':'San Pedro de Atacama', 'idProvinceDSPL': '6'});
	comDSPL.push({'idDSPL':'19', 'nameDSPL':'Maria Elena', 'idProvinceDSPL': '7'});
	comDSPL.push({'idDSPL':'20', 'nameDSPL':'Tocopilla', 'idProvinceDSPL': '7'});
	comDSPL.push({'idDSPL':'21', 'nameDSPL':'Chañaral', 'idProvinceDSPL': '8'});
	comDSPL.push({'idDSPL':'22', 'nameDSPL':'Diego de Almagro', 'idProvinceDSPL': '8'});
	comDSPL.push({'idDSPL':'23', 'nameDSPL':'Caldera', 'idProvinceDSPL': '9'});
	comDSPL.push({'idDSPL':'24', 'nameDSPL':'Copiapo', 'idProvinceDSPL': '9'});
	comDSPL.push({'idDSPL':'25', 'nameDSPL':'Tierra Amarilla', 'idProvinceDSPL': '9'});
	comDSPL.push({'idDSPL':'26', 'nameDSPL':'Alto del Carmen', 'idProvinceDSPL': '10'});
	comDSPL.push({'idDSPL':'27', 'nameDSPL':'Freirina', 'idProvinceDSPL': '10'});
	comDSPL.push({'idDSPL':'28', 'nameDSPL':'Huasco', 'idProvinceDSPL': '10'});
	comDSPL.push({'idDSPL':'29', 'nameDSPL':'Vallenar', 'idProvinceDSPL': '10'});
	comDSPL.push({'idDSPL':'30', 'nameDSPL':'Canela', 'idProvinceDSPL': '11'});
	comDSPL.push({'idDSPL':'31', 'nameDSPL':'Illapel', 'idProvinceDSPL': '11'});
	comDSPL.push({'idDSPL':'32', 'nameDSPL':'Los Vilos', 'idProvinceDSPL': '11'});
	comDSPL.push({'idDSPL':'33', 'nameDSPL':'Salamanca', 'idProvinceDSPL': '11'});
	comDSPL.push({'idDSPL':'34', 'nameDSPL':'Andacollo', 'idProvinceDSPL': '12'});
	comDSPL.push({'idDSPL':'35', 'nameDSPL':'Coquimbo', 'idProvinceDSPL': '12'});
	comDSPL.push({'idDSPL':'36', 'nameDSPL':'La Higuera', 'idProvinceDSPL': '12'});
	comDSPL.push({'idDSPL':'37', 'nameDSPL':'La Serena', 'idProvinceDSPL': '12'});
	comDSPL.push({'idDSPL':'38', 'nameDSPL':'Paihuano', 'idProvinceDSPL': '12'});
	comDSPL.push({'idDSPL':'39', 'nameDSPL':'Vicuña', 'idProvinceDSPL': '12'});
	comDSPL.push({'idDSPL':'40', 'nameDSPL':'Combarbala', 'idProvinceDSPL': '13'});
	comDSPL.push({'idDSPL':'41', 'nameDSPL':'Monte Patria', 'idProvinceDSPL': '13'});
	comDSPL.push({'idDSPL':'42', 'nameDSPL':'Ovalle', 'idProvinceDSPL': '13'});
	comDSPL.push({'idDSPL':'43', 'nameDSPL':'Punitaqui', 'idProvinceDSPL': '13'});
	comDSPL.push({'idDSPL':'44', 'nameDSPL':'Rio Hurtado', 'idProvinceDSPL': '13'});
	comDSPL.push({'idDSPL':'45', 'nameDSPL':'Isla de Pascua', 'idProvinceDSPL': '14'});
	comDSPL.push({'idDSPL':'46', 'nameDSPL':'Calle Larga', 'idProvinceDSPL': '15'});
	comDSPL.push({'idDSPL':'47', 'nameDSPL':'Los Andes', 'idProvinceDSPL': '15'});
	comDSPL.push({'idDSPL':'48', 'nameDSPL':'Rinconada', 'idProvinceDSPL': '15'});
	comDSPL.push({'idDSPL':'49', 'nameDSPL':'San Esteban', 'idProvinceDSPL': '15'});
	comDSPL.push({'idDSPL':'50', 'nameDSPL':'La Ligua', 'idProvinceDSPL': '16'});
	comDSPL.push({'idDSPL':'51', 'nameDSPL':'Papudo', 'idProvinceDSPL': '16'});
	comDSPL.push({'idDSPL':'52', 'nameDSPL':'Petorca', 'idProvinceDSPL': '16'});
	comDSPL.push({'idDSPL':'53', 'nameDSPL':'Zapallar', 'idProvinceDSPL': '16'});
	comDSPL.push({'idDSPL':'54', 'nameDSPL':'Hijuelas', 'idProvinceDSPL': '17'});
	comDSPL.push({'idDSPL':'55', 'nameDSPL':'Calera', 'idProvinceDSPL': '17'});
	comDSPL.push({'idDSPL':'56', 'nameDSPL':'La Cruz', 'idProvinceDSPL': '17'});
	comDSPL.push({'idDSPL':'57', 'nameDSPL':'Limache', 'idProvinceDSPL': '17'});
	comDSPL.push({'idDSPL':'58', 'nameDSPL':'Nogales', 'idProvinceDSPL': '17'});
	comDSPL.push({'idDSPL':'59', 'nameDSPL':'Olmue', 'idProvinceDSPL': '17'});
	comDSPL.push({'idDSPL':'60', 'nameDSPL':'Quillota', 'idProvinceDSPL': '17'});
	comDSPL.push({'idDSPL':'61', 'nameDSPL':'Algarrobo', 'idProvinceDSPL': '18'});
	comDSPL.push({'idDSPL':'62', 'nameDSPL':'Cartagena', 'idProvinceDSPL': '18'});
	comDSPL.push({'idDSPL':'63', 'nameDSPL':'El Quisco', 'idProvinceDSPL': '18'});
	comDSPL.push({'idDSPL':'64', 'nameDSPL':'El Tabo', 'idProvinceDSPL': '18'});
	comDSPL.push({'idDSPL':'65', 'nameDSPL':'San Antonio', 'idProvinceDSPL': '18'});
	comDSPL.push({'idDSPL':'66', 'nameDSPL':'Santo Domingo', 'idProvinceDSPL': '18'});
	comDSPL.push({'idDSPL':'67', 'nameDSPL':'Catemu', 'idProvinceDSPL': '19'});
	comDSPL.push({'idDSPL':'68', 'nameDSPL':'Llaillay', 'idProvinceDSPL': '19'});
	comDSPL.push({'idDSPL':'69', 'nameDSPL':'Panquehue', 'idProvinceDSPL': '19'});
	comDSPL.push({'idDSPL':'70', 'nameDSPL':'Putaendo', 'idProvinceDSPL': '19'});
	comDSPL.push({'idDSPL':'71', 'nameDSPL':'San Felipe', 'idProvinceDSPL': '19'});
	comDSPL.push({'idDSPL':'72', 'nameDSPL':'Santa Maria', 'idProvinceDSPL': '19'});
	comDSPL.push({'idDSPL':'73', 'nameDSPL':'Casablanca', 'idProvinceDSPL': '20'});
	comDSPL.push({'idDSPL':'74', 'nameDSPL':'Concon', 'idProvinceDSPL': '20'});
	comDSPL.push({'idDSPL':'75', 'nameDSPL':'Juan Fernandez', 'idProvinceDSPL': '20'});
	comDSPL.push({'idDSPL':'76', 'nameDSPL':'Puchuncavi', 'idProvinceDSPL': '20'});
	comDSPL.push({'idDSPL':'77', 'nameDSPL':'Quilpue', 'idProvinceDSPL': '20'});
	comDSPL.push({'idDSPL':'78', 'nameDSPL':'Quintero', 'idProvinceDSPL': '20'});
	comDSPL.push({'idDSPL':'79', 'nameDSPL':'Valparaiso', 'idProvinceDSPL': '20'});
	comDSPL.push({'idDSPL':'80', 'nameDSPL':'Villa Alemana', 'idProvinceDSPL': '20'});
	comDSPL.push({'idDSPL':'81', 'nameDSPL':'Viña del Mar', 'idProvinceDSPL': '20'});
	comDSPL.push({'idDSPL':'82', 'nameDSPL':'Colina', 'idProvinceDSPL': '21'});
	comDSPL.push({'idDSPL':'83', 'nameDSPL':'Lampa', 'idProvinceDSPL': '21'});
	comDSPL.push({'idDSPL':'84', 'nameDSPL':'Tiltil', 'idProvinceDSPL': '21'});
	comDSPL.push({'idDSPL':'85', 'nameDSPL':'Pirque', 'idProvinceDSPL': '22'});
	comDSPL.push({'idDSPL':'86', 'nameDSPL':'Puente Alto', 'idProvinceDSPL': '22'});
	comDSPL.push({'idDSPL':'87', 'nameDSPL':'San Jose de Maipo', 'idProvinceDSPL': '22'});
	comDSPL.push({'idDSPL':'88', 'nameDSPL':'Buin', 'idProvinceDSPL': '23'});
	comDSPL.push({'idDSPL':'89', 'nameDSPL':'Calera de Tango', 'idProvinceDSPL': '23'});
	comDSPL.push({'idDSPL':'90', 'nameDSPL':'Paine', 'idProvinceDSPL': '23'});
	comDSPL.push({'idDSPL':'91', 'nameDSPL':'San Bernardo', 'idProvinceDSPL': '23'});
	comDSPL.push({'idDSPL':'92', 'nameDSPL':'Alhue', 'idProvinceDSPL': '24'});
	comDSPL.push({'idDSPL':'93', 'nameDSPL':'Curacavi', 'idProvinceDSPL': '24'});
	comDSPL.push({'idDSPL':'94', 'nameDSPL':'Maria Pinto', 'idProvinceDSPL': '24'});
	comDSPL.push({'idDSPL':'95', 'nameDSPL':'Melipilla', 'idProvinceDSPL': '24'});
	comDSPL.push({'idDSPL':'96', 'nameDSPL':'San Pedro', 'idProvinceDSPL': '24'});
	comDSPL.push({'idDSPL':'97', 'nameDSPL':'Cerrillos', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'98', 'nameDSPL':'Cerro Navia', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'99', 'nameDSPL':'Conchali', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'100', 'nameDSPL':'El Bosque', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'101', 'nameDSPL':'Estacion Central', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'102', 'nameDSPL':'Huechuraba', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'103', 'nameDSPL':'Independencia', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'104', 'nameDSPL':'La Cisterna', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'105', 'nameDSPL':'La Granja', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'106', 'nameDSPL':'La Florida', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'107', 'nameDSPL':'La Pintana', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'108', 'nameDSPL':'La Reina', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'109', 'nameDSPL':'Las Condes', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'110', 'nameDSPL':'Lo Barnechea', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'111', 'nameDSPL':'Lo Espejo', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'112', 'nameDSPL':'Lo Prado', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'113', 'nameDSPL':'Macul', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'114', 'nameDSPL':'Maipu', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'115', 'nameDSPL':'Ñuñoa', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'116', 'nameDSPL':'Pedro Aguirre Cerda', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'117', 'nameDSPL':'Peñalolen', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'118', 'nameDSPL':'Providencia', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'119', 'nameDSPL':'Pudahuel', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'120', 'nameDSPL':'Quilicura', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'121', 'nameDSPL':'Quinta Normal', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'122', 'nameDSPL':'Recoleta', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'123', 'nameDSPL':'Renca', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'124', 'nameDSPL':'San Miguel', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'125', 'nameDSPL':'San Joaquin', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'126', 'nameDSPL':'San Ramon', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'127', 'nameDSPL':'Santiago', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'128', 'nameDSPL':'Vitacura', 'idProvinceDSPL': '25'});
	comDSPL.push({'idDSPL':'129', 'nameDSPL':'El Monte', 'idProvinceDSPL': '26'});
	comDSPL.push({'idDSPL':'130', 'nameDSPL':'Isla de Maipo', 'idProvinceDSPL': '26'});
	comDSPL.push({'idDSPL':'131', 'nameDSPL':'Padre Hurtado', 'idProvinceDSPL': '26'});
	comDSPL.push({'idDSPL':'132', 'nameDSPL':'Peñaflor', 'idProvinceDSPL': '26'});
	comDSPL.push({'idDSPL':'133', 'nameDSPL':'Talagante', 'idProvinceDSPL': '26'});
	comDSPL.push({'idDSPL':'134', 'nameDSPL':'Codegua', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'135', 'nameDSPL':'Coinco', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'136', 'nameDSPL':'Coltauco', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'137', 'nameDSPL':'Doñihue', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'138', 'nameDSPL':'Graneros', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'139', 'nameDSPL':'Las Cabras', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'140', 'nameDSPL':'Machali', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'141', 'nameDSPL':'Malloa', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'142', 'nameDSPL':'Mostazal', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'143', 'nameDSPL':'Olivar', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'144', 'nameDSPL':'Peumo', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'145', 'nameDSPL':'Pichidegua', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'146', 'nameDSPL':'Quinta de Tilcoco', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'147', 'nameDSPL':'Rancagua', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'148', 'nameDSPL':'Rengo', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'149', 'nameDSPL':'Requinoa', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'150', 'nameDSPL':'San Vicente', 'idProvinceDSPL': '27'});
	comDSPL.push({'idDSPL':'151', 'nameDSPL':'La Estrella', 'idProvinceDSPL': '28'});
	comDSPL.push({'idDSPL':'152', 'nameDSPL':'Litueche', 'idProvinceDSPL': '28'});
	comDSPL.push({'idDSPL':'153', 'nameDSPL':'Marchihue', 'idProvinceDSPL': '28'});
	comDSPL.push({'idDSPL':'154', 'nameDSPL':'Navidad', 'idProvinceDSPL': '28'});
	comDSPL.push({'idDSPL':'155', 'nameDSPL':'Paredones', 'idProvinceDSPL': '28'});
	comDSPL.push({'idDSPL':'156', 'nameDSPL':'Pichilemu', 'idProvinceDSPL': '28'});
	comDSPL.push({'idDSPL':'157', 'nameDSPL':'Chepica', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'158', 'nameDSPL':'Chimbarongo', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'159', 'nameDSPL':'Lolol', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'160', 'nameDSPL':'Nancagua', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'161', 'nameDSPL':'Palmilla', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'162', 'nameDSPL':'Peralillo', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'163', 'nameDSPL':'Placilla', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'164', 'nameDSPL':'Pumanque', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'165', 'nameDSPL':'San Fernando', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'166', 'nameDSPL':'Santa Cruz', 'idProvinceDSPL': '29'});
	comDSPL.push({'idDSPL':'167', 'nameDSPL':'Cauquenes', 'idProvinceDSPL': '30'});
	comDSPL.push({'idDSPL':'168', 'nameDSPL':'Chanco', 'idProvinceDSPL': '30'});
	comDSPL.push({'idDSPL':'169', 'nameDSPL':'Pelluhue', 'idProvinceDSPL': '30'});
	comDSPL.push({'idDSPL':'170', 'nameDSPL':'Curico', 'idProvinceDSPL': '31'});
	comDSPL.push({'idDSPL':'171', 'nameDSPL':'Hualañe', 'idProvinceDSPL': '31'});
	comDSPL.push({'idDSPL':'172', 'nameDSPL':'Licanten', 'idProvinceDSPL': '31'});
	comDSPL.push({'idDSPL':'173', 'nameDSPL':'Molina', 'idProvinceDSPL': '31'});
	comDSPL.push({'idDSPL':'174', 'nameDSPL':'Rauco', 'idProvinceDSPL': '31'});
	comDSPL.push({'idDSPL':'175', 'nameDSPL':'Romeral', 'idProvinceDSPL': '31'});
	comDSPL.push({'idDSPL':'176', 'nameDSPL':'Sagrada Familia', 'idProvinceDSPL': '31'});
	comDSPL.push({'idDSPL':'177', 'nameDSPL':'Teno', 'idProvinceDSPL': '31'});
	comDSPL.push({'idDSPL':'178', 'nameDSPL':'Vichuquen', 'idProvinceDSPL': '31'});
	comDSPL.push({'idDSPL':'179', 'nameDSPL':'Colbun', 'idProvinceDSPL': '32'});
	comDSPL.push({'idDSPL':'180', 'nameDSPL':'Linares', 'idProvinceDSPL': '32'});
	comDSPL.push({'idDSPL':'181', 'nameDSPL':'Longavi', 'idProvinceDSPL': '32'});
	comDSPL.push({'idDSPL':'182', 'nameDSPL':'Parral', 'idProvinceDSPL': '32'});
	comDSPL.push({'idDSPL':'183', 'nameDSPL':'Retiro', 'idProvinceDSPL': '32'});
	comDSPL.push({'idDSPL':'184', 'nameDSPL':'San Javier', 'idProvinceDSPL': '32'});
	comDSPL.push({'idDSPL':'185', 'nameDSPL':'Villa Alegre', 'idProvinceDSPL': '32'});
	comDSPL.push({'idDSPL':'186', 'nameDSPL':'Yerbas Buenas', 'idProvinceDSPL': '32'});
	comDSPL.push({'idDSPL':'187', 'nameDSPL':'Constitucion', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'188', 'nameDSPL':'Curepto', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'189', 'nameDSPL':'Empedrado', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'190', 'nameDSPL':'Maule', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'191', 'nameDSPL':'Pelarco', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'192', 'nameDSPL':'Pencahue', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'193', 'nameDSPL':'Rio Claro', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'194', 'nameDSPL':'San Clemente', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'195', 'nameDSPL':'San Rafael', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'196', 'nameDSPL':'Talca', 'idProvinceDSPL': '33'});
	comDSPL.push({'idDSPL':'197', 'nameDSPL':'Arauco', 'idProvinceDSPL': '34'});
	comDSPL.push({'idDSPL':'198', 'nameDSPL':'Cañete', 'idProvinceDSPL': '34'});
	comDSPL.push({'idDSPL':'199', 'nameDSPL':'Contulmo', 'idProvinceDSPL': '34'});
	comDSPL.push({'idDSPL':'200', 'nameDSPL':'Curanilahue', 'idProvinceDSPL': '34'});
	comDSPL.push({'idDSPL':'201', 'nameDSPL':'Lebu', 'idProvinceDSPL': '34'});
	comDSPL.push({'idDSPL':'202', 'nameDSPL':'Los Alamos', 'idProvinceDSPL': '34'});
	comDSPL.push({'idDSPL':'203', 'nameDSPL':'Tirua', 'idProvinceDSPL': '34'});
	comDSPL.push({'idDSPL':'204', 'nameDSPL':'Alto Biobio', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'205', 'nameDSPL':'Antuco', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'206', 'nameDSPL':'Cabrero', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'207', 'nameDSPL':'Laja', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'208', 'nameDSPL':'Los Angeles', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'209', 'nameDSPL':'Mulchen', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'210', 'nameDSPL':'Nacimiento', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'211', 'nameDSPL':'Negrete', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'212', 'nameDSPL':'Quilaco', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'213', 'nameDSPL':'Quilleco', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'214', 'nameDSPL':'San Rosendo', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'215', 'nameDSPL':'Santa Barbara', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'216', 'nameDSPL':'Tucapel', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'217', 'nameDSPL':'Yumbel', 'idProvinceDSPL': '35'});
	comDSPL.push({'idDSPL':'218', 'nameDSPL':'Chiguayante', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'219', 'nameDSPL':'Concepcion', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'220', 'nameDSPL':'Coronel', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'221', 'nameDSPL':'Florida', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'222', 'nameDSPL':'Hualpen', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'223', 'nameDSPL':'Hualqui', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'224', 'nameDSPL':'Lota', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'225', 'nameDSPL':'Penco', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'226', 'nameDSPL':'San Pedro de La Paz', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'227', 'nameDSPL':'Santa Juana', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'228', 'nameDSPL':'Talcahuano', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'229', 'nameDSPL':'Tome', 'idProvinceDSPL': '36'});
	comDSPL.push({'idDSPL':'230', 'nameDSPL':'Bulnes', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'231', 'nameDSPL':'Chillan', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'232', 'nameDSPL':'Chillan Viejo', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'233', 'nameDSPL':'Cobquecura', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'234', 'nameDSPL':'Coelemu', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'235', 'nameDSPL':'Coihueco', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'236', 'nameDSPL':'El Carmen', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'237', 'nameDSPL':'Ninhue', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'238', 'nameDSPL':'Ñiquen', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'239', 'nameDSPL':'Pemuco', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'240', 'nameDSPL':'Pinto', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'241', 'nameDSPL':'Portezuelo', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'242', 'nameDSPL':'Quillon', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'243', 'nameDSPL':'Quirihue', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'244', 'nameDSPL':'Ranquil', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'245', 'nameDSPL':'San Carlos', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'246', 'nameDSPL':'San Fabian', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'247', 'nameDSPL':'San Ignacio', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'248', 'nameDSPL':'San Nicolas', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'249', 'nameDSPL':'Treguaco', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'250', 'nameDSPL':'Yungay', 'idProvinceDSPL': '37'});
	comDSPL.push({'idDSPL':'251', 'nameDSPL':'Carahue', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'252', 'nameDSPL':'Cholchol', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'253', 'nameDSPL':'Cunco', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'254', 'nameDSPL':'Curarrehue', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'255', 'nameDSPL':'Freire', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'256', 'nameDSPL':'Galvarino', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'257', 'nameDSPL':'Gorbea', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'258', 'nameDSPL':'Lautaro', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'259', 'nameDSPL':'Loncoche', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'260', 'nameDSPL':'Melipeuco', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'261', 'nameDSPL':'Nueva Imperial', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'262', 'nameDSPL':'Padre Las Casas', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'263', 'nameDSPL':'Perquenco', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'264', 'nameDSPL':'Pitrufquen', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'265', 'nameDSPL':'Pucon', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'266', 'nameDSPL':'Saavedra', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'267', 'nameDSPL':'Temuco', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'268', 'nameDSPL':'Teodoro Schmidt', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'269', 'nameDSPL':'Tolten', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'270', 'nameDSPL':'Vilcun', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'271', 'nameDSPL':'Villarrica', 'idProvinceDSPL': '38'});
	comDSPL.push({'idDSPL':'272', 'nameDSPL':'Angol', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'273', 'nameDSPL':'Collipulli', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'274', 'nameDSPL':'Curacautin', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'275', 'nameDSPL':'Ercilla', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'276', 'nameDSPL':'Lonquimay', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'277', 'nameDSPL':'Los Sauces', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'278', 'nameDSPL':'Lumaco', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'279', 'nameDSPL':'Puren', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'280', 'nameDSPL':'Renaico', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'281', 'nameDSPL':'Traiguen', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'282', 'nameDSPL':'Victoria', 'idProvinceDSPL': '39'});
	comDSPL.push({'idDSPL':'283', 'nameDSPL':'Corral', 'idProvinceDSPL': '40'});
	comDSPL.push({'idDSPL':'284', 'nameDSPL':'Lanco', 'idProvinceDSPL': '40'});
	comDSPL.push({'idDSPL':'285', 'nameDSPL':'Los Lagos', 'idProvinceDSPL': '40'});
	comDSPL.push({'idDSPL':'286', 'nameDSPL':'Mafil', 'idProvinceDSPL': '40'});
	comDSPL.push({'idDSPL':'287', 'nameDSPL':'Mariquina', 'idProvinceDSPL': '40'});
	comDSPL.push({'idDSPL':'288', 'nameDSPL':'Paillaco', 'idProvinceDSPL': '40'});
	comDSPL.push({'idDSPL':'289', 'nameDSPL':'Panguipulli', 'idProvinceDSPL': '40'});
	comDSPL.push({'idDSPL':'290', 'nameDSPL':'Valdivia', 'idProvinceDSPL': '40'});
	comDSPL.push({'idDSPL':'291', 'nameDSPL':'Futrono', 'idProvinceDSPL': '41'});
	comDSPL.push({'idDSPL':'292', 'nameDSPL':'La Union', 'idProvinceDSPL': '41'});
	comDSPL.push({'idDSPL':'293', 'nameDSPL':'Lago Ranco', 'idProvinceDSPL': '41'});
	comDSPL.push({'idDSPL':'294', 'nameDSPL':'Rio Bueno', 'idProvinceDSPL': '41'});
	comDSPL.push({'idDSPL':'295', 'nameDSPL':'Ancud', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'296', 'nameDSPL':'Castro', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'297', 'nameDSPL':'Chonchi', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'298', 'nameDSPL':'Curaco de Velez', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'299', 'nameDSPL':'Dalcahue', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'300', 'nameDSPL':'Puqueldon', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'301', 'nameDSPL':'Queilen', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'302', 'nameDSPL':'Quemchi', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'303', 'nameDSPL':'Quellon', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'304', 'nameDSPL':'Quinchao', 'idProvinceDSPL': '42'});
	comDSPL.push({'idDSPL':'305', 'nameDSPL':'Calbuco', 'idProvinceDSPL': '43'});
	comDSPL.push({'idDSPL':'306', 'nameDSPL':'Cochamo', 'idProvinceDSPL': '43'});
	comDSPL.push({'idDSPL':'307', 'nameDSPL':'Fresia', 'idProvinceDSPL': '43'});
	comDSPL.push({'idDSPL':'308', 'nameDSPL':'Frutillar', 'idProvinceDSPL': '43'});
	comDSPL.push({'idDSPL':'309', 'nameDSPL':'Llanquihue', 'idProvinceDSPL': '43'});
	comDSPL.push({'idDSPL':'310', 'nameDSPL':'Los Muermos', 'idProvinceDSPL': '43'});
	comDSPL.push({'idDSPL':'311', 'nameDSPL':'Maullin', 'idProvinceDSPL': '43'});
	comDSPL.push({'idDSPL':'312', 'nameDSPL':'Puerto Montt', 'idProvinceDSPL': '43'});
	comDSPL.push({'idDSPL':'313', 'nameDSPL':'Puerto Varas', 'idProvinceDSPL': '43'});
	comDSPL.push({'idDSPL':'314', 'nameDSPL':'Osorno', 'idProvinceDSPL': '44'});
	comDSPL.push({'idDSPL':'315', 'nameDSPL':'Puerto Octay', 'idProvinceDSPL': '44'});
	comDSPL.push({'idDSPL':'316', 'nameDSPL':'Purranque', 'idProvinceDSPL': '44'});
	comDSPL.push({'idDSPL':'317', 'nameDSPL':'Puyehue', 'idProvinceDSPL': '44'});
	comDSPL.push({'idDSPL':'318', 'nameDSPL':'Rio Negro', 'idProvinceDSPL': '44'});
	comDSPL.push({'idDSPL':'319', 'nameDSPL':'San Juan de la Costa', 'idProvinceDSPL': '44'});
	comDSPL.push({'idDSPL':'320', 'nameDSPL':'San Pablo', 'idProvinceDSPL': '44'});
	comDSPL.push({'idDSPL':'321', 'nameDSPL':'Chaiten', 'idProvinceDSPL': '45'});
	comDSPL.push({'idDSPL':'322', 'nameDSPL':'Futaleufu', 'idProvinceDSPL': '45'});
	comDSPL.push({'idDSPL':'323', 'nameDSPL':'Hualaihue', 'idProvinceDSPL': '45'});
	comDSPL.push({'idDSPL':'324', 'nameDSPL':'Palena', 'idProvinceDSPL': '45'});
	comDSPL.push({'idDSPL':'325', 'nameDSPL':'Aysen', 'idProvinceDSPL': '46'});
	comDSPL.push({'idDSPL':'326', 'nameDSPL':'Cisnes', 'idProvinceDSPL': '46'});
	comDSPL.push({'idDSPL':'327', 'nameDSPL':'Guaitecas', 'idProvinceDSPL': '46'});
	comDSPL.push({'idDSPL':'328', 'nameDSPL':'Cochrane', 'idProvinceDSPL': '47'});
	comDSPL.push({'idDSPL':'329', 'nameDSPL':'O\'higgins', 'idProvinceDSPL': '47'});
	comDSPL.push({'idDSPL':'330', 'nameDSPL':'Tortel', 'idProvinceDSPL': '47'});
	comDSPL.push({'idDSPL':'331', 'nameDSPL':'Coyhaique', 'idProvinceDSPL': '48'});
	comDSPL.push({'idDSPL':'332', 'nameDSPL':'Lago Verde', 'idProvinceDSPL': '48'});
	comDSPL.push({'idDSPL':'333', 'nameDSPL':'Chile Chico', 'idProvinceDSPL': '49'});
	comDSPL.push({'idDSPL':'334', 'nameDSPL':'Rio Ibañez', 'idProvinceDSPL': '49'});
	comDSPL.push({'idDSPL':'335', 'nameDSPL':'Antartica', 'idProvinceDSPL': '50'});
	comDSPL.push({'idDSPL':'336', 'nameDSPL':'Cabo de Hornos', 'idProvinceDSPL': '50'});
	comDSPL.push({'idDSPL':'337', 'nameDSPL':'Laguna Blanca', 'idProvinceDSPL': '51'});
	comDSPL.push({'idDSPL':'338', 'nameDSPL':'Punta Arenas', 'idProvinceDSPL': '51'});
	comDSPL.push({'idDSPL':'339', 'nameDSPL':'Rio Verde', 'idProvinceDSPL': '51'});
	comDSPL.push({'idDSPL':'340', 'nameDSPL':'San Gregorio', 'idProvinceDSPL': '51'});
	comDSPL.push({'idDSPL':'341', 'nameDSPL':'Porvenir', 'idProvinceDSPL': '52'});
	comDSPL.push({'idDSPL':'342', 'nameDSPL':'Primavera', 'idProvinceDSPL': '52'});
	comDSPL.push({'idDSPL':'343', 'nameDSPL':'Timaukel', 'idProvinceDSPL': '52'});
	comDSPL.push({'idDSPL':'344', 'nameDSPL':'Natales', 'idProvinceDSPL': '53'});
	comDSPL.push({'idDSPL':'345', 'nameDSPL':'Torres del Paine', 'idProvinceDSPL': '53'});

	comDSPL.sort(function(a, b){
		var nameA = a.nameDSPL.toLowerCase(), nameB=b.nameDSPL.toLowerCase();
	 	if (nameA < nameB) //sort string ascending
	  		return -1 
	 	if (nameA > nameB)
	  		return 1
	 	return 0 //default return value (no sorting)
	});

	return comDSPL;
}