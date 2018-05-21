var authController = require('../controllers/auth-controller.js');
 
module.exports = function(app) {
 
    app.get('/signup', authController.signup);
 
}