/**
 * Api/v1/ShipController
 *
 * @description :: Server-side logic for managing api/v1/ship route
 * @route       :: api/v1/ship
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
    Ship.find({id: req.params.id}).exec(function (error, found) {
      if (error) {
        console.log(error);
      } else {
        var item = found.pop();

        if (req.body.ship_type) {
          item.ship_type = req.body.ship_type;
        }
        if (req.body.description) {
          item.description = req.body.description;
        }
        if (req.body.details) {
          item.details = req.body.details;
        }
        if (req.body.img) {
          item.img = req.body.img;
        }

        item.save(function (err, s) {
          if (err) {
            console.log(err);
          } else {
            var response = {
              status: 'saved',
              ship: item
            };
            return res.json(response);
          }
        });
      }
    });
  },


  /**
   * Delete an existing ship
	 * @method DELETE
   * @route /:id
   */
  destroy: function (req, res) {
    console.log(req.params.id);

    Ship.destroy({id: req.params.id}).exec(function (error) {
      if (error) {
        console.log(error);
      } else {
        var response = {
          status: 'deleted'
        };
        return res.json(response);
      }
    });
  }
};
