var LocalStrategy   = require('passport-local').Strategy;
var User = require('../modelos/usuarios');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {
            User.findOne({ 'email' :  username }, 
                function(err, user) {
                    if (err){
                        return done(err);
                    } 
                    if (username==='admin'){
                        console.log('admin'); 
                    }

                    if (!user){
                        return done(null, false, req.flash('message', 'User Not found.'));
                        console.log('noooo');                 
                    }
                    if (!isValidPassword(user, password)){
                        return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
                    }
                    return done(null, user);
                }
            );

        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }   
}