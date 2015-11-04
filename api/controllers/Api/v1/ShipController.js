/**
 * Api/v1/ShipController
 *
 * @description :: Server-side logic for managing api/v1/ship route
 * @route       :: api/v1/ship
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/**
   * List all the records
	 * @method GET
   * @route /
   */
  find: function (req, res) {
    Ship.find({}).exec(function (error, found) {
      if (error) {
        console.log(error);
      } else {
        return res.json(found);
      }
    });
  },

  /**
   * Information about a single ship
   * @method GET
   * @route /:id
   */
  findOne: function (req, res) {
    console.log(req.params.id);
    Ship.find({id: req.params.id}).exec(function (error, found) {
      if (error) {
        console.log(error);
      } else {
        return res.json(found);
      }
    });
  },

  /**
   * Craete a new ship instance
	 * @method POST
   * @route /
   */
  create: function (req, res) {
		var newShip = {
			ship_type: req.body.ship_type,
			description: req.body.description,
      img: req.body.img
		};

		Ship.create(newShip, function (error, created) {
      if (error) {
        console.log(error);
      } else {
        return res.json({
  	      status: 'Object saved with id ' + created.id
  	    });
      }
    });
  },

  /**
   * Update an existing Ship
	 * @method PUT
   * @route /:id
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
   * @route /:id
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!',
			route: 'ship/:id',
			should: 'delete a specific ship'
    });
  }
};
