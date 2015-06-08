
var mongoose = require('mongoose');

module.exports = mongoose.model('Ub',{
    id: String,
    usuario: String,
    ubicacion: String
});