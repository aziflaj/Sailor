/**
 * Api/v1/ShipController
 *
 * @description :: Server-side logic for managing api/v1/ships
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/**
   * List all the records
	 * @method GET
   * @route /ship
   */
  find: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!',
			should: 'display a list of all ships'
    });
  },

  /**
   * Information about a single ship
   * @method GET
   * @route /ship/:id
   */
  findOne: function (req, res) {
    console.log(req.params.id);
    return res.json({
      todo: 'show() is not implemented yet!',
      should: 'display a specific ship'
    });
  },

  /**
   * Craete a new ship instance
	 * @method POST
   * @route /ship
   */
  create: function (req, res) {
		// var newShip = {
		// 	shipType: '...',
		// 	description: '...'
		// };
		//
		// Ship.create(newShip, function (error, created) {
    //   if (error) {
    //     console.log('error');
    //   }
    //   console.log('Object saved with id ' + created.id);
		//
    //   return res.json({
	  //     status: 'Object saved with id ' + created.id
	  //   });
    // });

    return res.json({
      todo: 'create() is not implemented yet!',
			should: 'create a new ship'
    });
  },

  /**
   * Update an existing Ship
	 * @method PUT
   * @route /ship/:id
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!',
			route: 'ship/:id',
			should: 'update a specific ship'
    });
  },


  /**
   * Delete an existing ship
	 * @method DELETE
   * @route /ship/:id
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!',
			route: 'ship/:id',
			should: 'delete a specific ship'
    });
  }
};
