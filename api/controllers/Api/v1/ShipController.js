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
    Ship.findOne({id: req.params.id}).exec(function (error, result) {
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
    var isAdmin = Authorizer.checkIfAdmin(req.query.api_key);
    var isEditor = Authorizer.checkIfEditor(req.query.api_key);
    var validRequest = isAdmin || isEditor;

    if (!req.query.api_key || typeof req.query.api_key === 'undefined' || !validRequest) {
      return res.json({
        status: 'error',
        message: 'Unknown API KEY!'
      });
    }

    //else
    var validator = Validator.validateShipParams(req.body);

    if (validator.valid) {
      Ship.create(validator.ship, function (error, created) {
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
    } else {
      return res.json({
        status: "error",
        message: validator.messages,
        sent_item: req.body
      });
    }
  },

  /**
   * Update an existing Ship
	 * @method PUT
   * @route /:id
   */
   update: function (req, res) {
     User.findOne({api_key: req.query.api_key}).exec(function (error, found) {
       if (error) {
         console.log(error);
         return res.json({
           status: 'error',
           message: 'Some error occurred. Please try again later.'
         });
       } else if (typeof found === 'undefined') {
         console.log('Authorizer: undefined');
         return res.json({
           status: 'error',
           message: 'API KEY not known'
         });
       } else if (found.role === 'admin' || found.role === 'editor') {
         Ship.find({id: req.params.id}).exec(function (error, found) {
           if (error) {
             console.log(error);
             return res.json({
               status: 'error',
               message: 'Some error occurred. Please try again later.'
             });
           } else {
             var item = found.pop();
             item.ship_type = req.body.ship_type || item.ship_type;
             item.description = req.body.description || item.description;
             item.details = req.body.details || item.details;
             item.img = req.body.img || item.img;
             item.save(function (err, s) {
               if (err) {
                 console.log(err);
                 return res.json({
                   status: 'error',
                   message: 'Some error occurred. Please try again later.'
                 });
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
       } else {
         return res.json({
           status: 'error',
           message: "You don't have access!"
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
    User.findOne({api_key: req.query.api_key}).exec(function (error, found) {
      if (error) {
        console.log('Authorizer: error');
        console.log(error);
      } else if (typeof found === 'undefined') {
        console.log('Authorizer: undefined');
        return res.json({
          status: 'error',
          message: 'API KEY not known'
        });
      } else {
        if (found.role === 'admin') {
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
        } else {
          console.log('Authorizer: not an admin');
          return res.json({
            status: 'error',
            message: 'Not an admin'
          });
        }
      }
    });
  }
};
