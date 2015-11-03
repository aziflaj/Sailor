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

    // create a new Ship object
    var barque = {
      shipType: 'Barque',
      description: 'A sailing vessel with three or more masts, fore-and-aft rigged on only the aftermost.'
    };

    Ship.create(barque, function (error, created) {
      if (error) {
        console.log('error');
      }
      console.log('Object saved with id ' + created.id);

      return res.json({
  			status: 'Object saved with id ' + created.id
  		});
    });
	},

};
