'use strict';

var User = require('../models/user');
var Permission = require('../models/permission');
var Bag = require('../models/bag');

var encrypt = require('../util/encrypt');
var generator = require('generate-password');
var jwt    = require('jsonwebtoken');
var Mailer = require('../util/mailer.js');
var config = require('../util/config');

module.exports = {
  userLogin: userLogin,
  findUsers: findUsers,
  findUserByEmail: findUserByEmail,
  findTypesUser: findTypesUser,
  findTypeUser: findTypeUser,
  addUser: addUser,
  userResetPassword: userResetPassword,
  updateUser: updateUser,
  userRegister: userRegister,
  userValidateEmail: userValidateEmail,
  deleteUser: deleteUser
};

function userLogin (req, res) {

  var body = req.body;
  var email = body.email;
  var password = body.password;

  User.findOne({email:email}, function (err, user) {
		if (!err && user) {
			if (user.password != null) {
				encrypt.comparePassword(password, user.password, function (err, isPasswordMatch) {
					if (!err && isPasswordMatch) {
						var u = {
							id: user._id,
							email: user.email
						}
						var token = jwt.sign(u, config.jwt.secret, {
				          expiresIn: '1d' // expires in 24 hours
				        });
						user.token = token;
						user.save(function (err, response) {
							if (!err) {
								res.send(user);
							} else {
								res.status(500).send({ code: 500, descripcion: 'Token not save'});
								console.log('ERROR: ' + err);
							}
						});
					} else {
						res.status(400).send({ code: 400, descripcion: 'Incorrect password'});
						console.log('INFO: Incorrect password: ' + err);
					}
				});
			} else {
				res.status(202).send({ code: 202, descripcion: "User is visitor, doesn't have an associated password"});
				console.log("INFO: User is visitor, doesn't have an associated password: " + err);
			}
		} else {
			res.status(404).send({ code: 404, desc: "Users doesn't exist"});
			console.log("INFO: Users doesn't exist: " + err);
		}
	});
}

function findUsers (req, res) {

  	var token = req.headers.authorization;
	// verifies secret and checks exp
	jwt.verify(token, config.jwt.secret, function(err, decoded) {
	    if (err) {
	      res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
	      console.log('INFO: Fallo en la autenticación de Token: ' + err);
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;
	  		User.find({}, function (err, users) {
	  			if (!err) {
					if (users.length > 0) {
					    res.send(users); 
					} else {
						res.status(404).send({ code: 404, desc: "Users doesn't exist"});
						console.log("LOG: Users doesn't exist");
					}
				} else {
					res.status(500).send({ code: 500, desc: err.message});
					console.log('ERROR: ' + err);
				}
	  		});
	    }
	});
}

function findUserByEmail (req, res) {
	
	var email = req.param('email');
	var token = req.headers.authorization;
    // verifies secret and checks exp
    jwt.verify(token, config.jwt.secret, function (err, decoded) {
        if (err) {
          res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
          console.log('INFO: Fallo en la autenticación de Token: ' + err);
        } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;
            if (email) {
	        	User.findOne({email:email}, function (err, user) {
					if (!err) {
						if (user) {
							res.send(user);
						} else {
							res.status(404).send({ code: 404, desc: "User doesn't exist"});
							console.log("LOG: User doesn't exist");
						}
					} else {
						res.status(500).send({ code: 500, desc: err.message});
						console.log('ERROR: ' + err);
					}
				});
        	} else {
        		res.status(400).send({ code: 400, desc: 'User email is required'});
				console.log('LOG: User email is required');
        	}
        }
    });
}

function findTypesUser (req, res) {
  	
	var token = req.headers.authorization;
	// verifies secret and checks exp
	jwt.verify(token, config.jwt.secret, function(err, decoded) {
	    if (err) {
	      res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
	      console.log('INFO: Fallo en la autenticación de Token: ' + err);
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;
			var types = {
				super: config.user.type.super,
				admin: config.user.type.admin,
				client: config.user.type.client
			}
		    res.send(types);
		}
	});
}

function findTypeUser (req, res) {
  	
	var body = req.body;
  	var email = body.email;
	var token = req.headers.authorization;
	// verifies secret and checks exp
	jwt.verify(token, config.jwt.secret, function(err, decoded) {
	    if (err) {
	      res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
	      console.log('INFO: Fallo en la autenticación de Token: ' + err);
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;
	        if (email) {
		  		User.findOne({email:email}, function (err, user) {
		  			if (!err) {
						if (user) {
						    res.send(user);
						} else {
							res.status(404).send({ code: 404, desc: "User doesn't exist"});
							console.log("LOG: User doesn't exist");
						}
					} else {
						res.status(500).send({ code: 500, desc: err.message});
						console.log('ERROR: ' + err);
					}
		  		});
		  	} else {
				res.status(400).send({ code: 400, desc: 'User email is required'});
				console.log('LOG: User email is required');
		  	}
	    }
	});
}

// Registar usuario administrador

function addUser (req, res) {
	// variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
	var body = req.body;
	var psw = generator.generate({length: 10,numbers: true});

  	var token = req.headers.authorization;
	// verifies secret and checks exp
	jwt.verify(token, config.jwt.secret, function(err, decoded) {
	    if (err) {
	      res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
	      console.log('INFO: Fallo en la autenticación de Token: ' + err);
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;
	      encrypt.cryptPassword(psw, function (err, hash) {
				if (!err && hash) {
					var password = 	hash;
					var email = body.email;
					User.findOne({email:email}, function (err, user) {
						if (!err) {
							if (!user) {
								var name = body.name;
								var lastname = body.lastname;
								var rut = body.rut;
								var type = body.type;

								var user = new User ({
									email: email,
									name: name,
									lastname: lastname,
									password: password,
									rut: rut,
									type: type
								});
								save(user, res);
								// Send mail de validación de correo
								Mailer.sendMailValidation(user, psw);
							} else {
								res.status(404).send({ code: 404, desc: "User does exist"});
								console.log("LOG: User does exist");
							}
						} else {
							res.status(500).send({ code: 500, desc: err.message});
							console.log('ERROR: ' + err);
						}
					});
				} else {
					res.status(500).send({ code: 501, descripcion: 'Error encrypt password'});
					console.log('ERROR: ' + err);
				}
			});
	    }
	});
}

function save (user, res) {
	user.save(function (err, response) {
		if (!err) {
			res.send(user);
		} else {
			res.status(500).send({ code: 501, desc: err.message});
			console.log('ERROR: ' + err);
		}
	});
}

function userResetPassword (req, res) {
	var admin = req.param('admin');
	var email = req.param('email');
  	var token = req.headers.authorization;
	// verifies secret and checks exp
	jwt.verify(token, config.jwt.secret, function(err, decoded) {
	    if (err) {
	      res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
	      console.log('INFO: Fallo en la autenticación de Token: ' + err);
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;
	    	User.findOne({email:admin}, function (err, user) {
				if (!err) {
					Permission.findOne({typeUser:user.type}, function (err, per) {
						if (per.resetPassword) {
							User.findOne({email:email}, function (err, user) {
								if (!err) {
									if (user) {
										var psw = generator.generate({length: 10,numbers: true});
										encrypt.cryptPassword(psw, function (err, hash) {
											if (!err && hash) {
												var password = 	hash;
												user.password = password;
												save(user, res);
												// Send mail Reset Password
												Mailer.sendMailResetPassword(user, psw);
											} else {
												res.status(500).send({ code: 500, descripcion: 'Error encrypt password'});
												console.log('ERROR: ' + err);
											}
										});
									} else {
										res.status(404).send({ code: 404, desc: "User does'n exist"});
										console.log("LOG: User doesn't exist");
									}
								} else {
									res.status(500).send({ code: 501, desc: err.message});
									console.log('ERROR: ' + err);
								}
							});
						} else {
							res.status(401).send({ code: 402, desc: "User isn't authorized to perform this action."});
							console.log("LOG: User isn't authorized to perform this action.");
						}
					});
				}
			});
	    }
	});
}

function updateUser (req, response) {
  
  var body = req.body;
  var email = body.email;
  var name = body.name || '';
  var lastname = body.lastname || '';
  var password = body.password || '';
  var rut = body.rut || '';
  var type = body.type || '';

	var token = req.headers.authorization;
	// verifies secret and checks exp
	jwt.verify(token, config.jwt.secret, function(err, decoded) {
	    if (err) {
	      res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
	      console.log('INFO: Fallo en la autenticación de Token: ' + err);
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;
	        User.findOne({email:email}, function (err, user) {
				if (!err && user) {
					if (name != '') user.name = name;
					if (lastname != '') user.lastname = lastname;
					if (rut != '') user.rut = rut;
					if (type != '') user.type = type;
					if (password != '') {
						encrypt.cryptPassword(password, function (err, hash) { 
							if (!err && hash) {
								user.password = hash;
								save(user, response);
							}
						});
					} else {
						save(user, response);
					}
				} else {
					res.status(404).send({ code: 404, desc: "User does'n exist"});
					console.log("LOG: User doesn't exist");
				}
			});
	    }
	});
}

// Registar usuario clientes

function userRegister (req, res) {

  	var body = req.body;
  	var email = body.email;

	var token = req.headers.authorization;
	// verifies secret and checks exp
	jwt.verify(token, config.jwt.secret, function(err, decoded) {
	    if (err) {
	      res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
	      console.log('INFO: Fallo en la autenticación de Token: ' + err);
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;
	        User.findOne({email:email}, function (err, user) {
				if (!err) {
					if (!user) {
						
						var user = new User ({
							email: email,
							name: body.name,
							lastname: body.lastname,
							type: body.type
						});
						
						user.save(function (err, response) {
							if (!err) {
								console.log('User successfully registered');
								var type = 'Visitante';
								saveBag(response, type, res);
								// Send mail de validación de correo
								Mailer.sendMailValidation(user, null);
							} else {
								res.status(500).send({ code: 500, desc: err.message});
								console.log('ERROR: ' + err);
							}
						});	
					} else {
						res.status(404).send({ code: 404, desc: "User does exist"});
						console.log("LOG: User does exist");
					}
				} else {
					res.status(500).send({ code: 501, desc: err.message});
					console.log('ERROR: ' + err);
				}
			});
	    }
	});
}

function saveBag (user, type, res) {
	Bag.getQuotes(type, function (err, numQuote) {
		if (!err && numQuote) {
			var bolsa = new Bolsa({
				email: user.email,
				type: type,
				numQuote: numQuote,
				purchased: new Date
			});

			bag.save(function (err, response) {
				if (!err) {
					res.send(user);
					console.log('LOG: Visitor bag successfully assigned');
				} else {
					res.status(500).send({ code: 502, desc: err.message});
					console.log('ERROR: ' + err);
				}
			});
		} else {
			res.status(500).send({ code: 503, desc: err.message});
			console.log('ERROR: ' + err);
		}
	});
}

function userValidateEmail (req, res) {

	var email = req.param('email');
	var token = req.headers.authorization;
	// verifies secret and checks exp
	jwt.verify(token, config.jwt.secret, function(err, decoded) {
	    if (err) {
	      res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
	      console.log('INFO: Fallo en la autenticación de Token: ' + err);
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;
	        User.findOne({email:email}, function (err, user) {
			  	if (!err && user) {
			  		if (!user.status){
			  			user.status = true;
			  			user.save(function (err, response) {
							if (!err) {
								res.send(user);
								console.log('User validated successfully');
							} else {
								res.status(500).send({ code: 500, desc: err.message});
								console.log('ERROR: ' + err);
							}
						});
			  		} else {
			  			res.status(202).send({ code: 202, desc: 'User already validated'});
						console.log('LOG: User already validated');
			  		}
			  	} else {
			  		res.status(404).send({ code: 404, desc: "User doesn't exist"});
					console.log("LOG: User doesn't exist");
			  	}
			});
	    }
	});
}

function deleteUser (req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var body = req.body;
  var email = body.email;

	var token = req.headers.authorization;
	// verifies secret and checks exp
	jwt.verify(token, config.jwt.secret, function(err, decoded) {
	    if (err) {
	      res.status(401).send({ code: 401, descripcion: 'Fallo en la autenticación de Token (' + err.message + ')'});
	      console.log('INFO: Fallo en la autenticación de Token: ' + err);
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;
	        User.findOne({email:email}, function (err, user) {
			  	if (!err && user) {
			  		if (user.status){
			  			user.status = false;
			  			user.save(function (err, response) {
							if (!err) {
								res.send(user);
								console.log('Usuario deshabilitado exitosamente');
							} else {
								res.status(500).send({ code: 500, desc: err.message});
								console.log('ERROR: ' + err);
							}
						});
			  		} else {
			  			res.status(202).send({ code: 202, desc: 'User already disabled'});
						console.log('LOG: User already disabled');
			  		}
			  	} else {
			  		res.status(404).send({ code: 404, desc: "User doesn't exist"});
					console.log("LOG: User doesn't exist");
			  	}
			});
	    }
	});
}