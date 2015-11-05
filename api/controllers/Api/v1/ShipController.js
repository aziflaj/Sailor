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
    Ship.find({}).exec(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        var response = {
          status: 'success',
          ships: result
        };
        return res.json(response);
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
    Ship.find({id: req.params.id}).exec(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        var response = {
          status: 'success',
          ship: result
        };
        return res.json(response);
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
      details: req.body.details,
      img: req.body.img
		};

		Ship.create(newShip, function (error, created) {
      if (error) {
        console.log(error);
      } else {
        var response = {
          status: 'success',
          message: 'Object saved with id: ' + created.id,
          id: created.id
        };
        return res.json(response);
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
