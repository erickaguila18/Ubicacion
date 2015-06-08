
var User = require('../modelos/usuarios');
var Ubication = require('../modelos/ubicaciones');

router.post('/guardar', function(req, res){
    var usuario = new Usuario({
        usuario: req.body.user,
        ubicacion: req.body.ubicacion
    });
    usuario.save(function(error, documento){
        if(error){
            res.send('Error al intentar guardar el usuario.');
        }else{  
            res.redirect('/home');
        }
    });
});