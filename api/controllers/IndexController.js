/**
 * IndexController
 *
 * @description :: The base controller
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `IndexController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },

	/**
	 * `IndexController.create()`
	 */

  //
  // THE CODE BELOW IS FOR DEMONSTRATION ONLY! DO NOT USE IN PRODUCTION!
  //
  // This code below was used to initially seed the first admin and the first
  // editor. It was never intended to be used in the production environment.
  // The users created can be reinserted in the database with their corresponding
  // data after executing the appropriate shell script importing the data into
  // MongoDB.

  // create: function (req, res) {
  //   var admin = {
  //     username: 'admin',
  //     password: bcrypt.hashSync('admin', salt),
  //     role: 'admin',
  //     api_key: md5('adminadmin')
  //   };
  //
  //   var editor = {
  //     username: 'editor',
  //     password: bcrypt.hashSync('editor', salt),
  //     role: 'editor',
  //     api_key: md5('editoreditor')
  //   };
  //
  //   User.create([admin, editor], function (error, storedObjects) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       var messages = [];
  //       for (var i = 0; i < storedObjects.length; i++) {
  //         console.log(storedObjects[i]);
  //         messages.push(storedObjects[i].username + ' created with id ' + storedObjects[i].id);
  //       }
  //
  //       return res.json(messages);
  //     }
  //   });
	// },

};
