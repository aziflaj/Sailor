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
	create: function (req, res) {
    var admin = {
      username: 'admin',
      password: bcrypt.hashSync('admin', salt),
      role: 'admin'
    };

    var editor = {
      username: 'editor',
      password: bcrypt.hashSync('editor', salt),
      role: 'editor'
    };

    User.create([admin, editor], function (error, storedObjects) {
      if (error) {
        console.log(error);
      } else {
        var messages = [];
        for (var i = 0; i < storedObjects.length; i++) {
          console.log(storedObjects[i]);
          messages.push(storedObjects[i].username + ' created with id ' + storedObjects[i].id);
        }

        return res.json(messages);
      }
    });
	},

};
