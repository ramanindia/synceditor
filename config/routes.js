var home = require('../app/controllers/home');

//you can include all your controllers

module.exports = function (app)
 {
	 app.get('/editor', home.editor);
     app.post('/savedata', home.savedata);
   

}
