/**
 * Api/v1/ShipController
 *
 * @description :: Server-side logic for managing api/v1/ships
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/**
   * `Api/v1/ShipController.index()`
	 * @method GET
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!',
			should: 'display a list of all ships'
    });
  },


  /**
   * `Api/v1/ShipController.new()`
	 * @method GET
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!',
			should: 'return a form for adding a new ship'
    });
  },


  /**
   * `Api/v1/ShipController.create()`
	 * @method POST
   */
  create: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!',
			should: 'create a new message'
    });
  },


  /**
   * `Api/v1/ShipController.show()`
	 * @method GET
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!',
			route: 'ship/:id',
			should: 'display a specific ship'
    });
  },


  /**
   * `Api/v1/ShipController.edit()`
	 * @method GET
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!',
			route: 'ship/:id/edit',
			should: 'display a form for editing a specific ship'
    });
  },


  /**
   * `Api/v1/ShipController.update()`
	 * @method PUT
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!',
			route: 'ship/:id',
			should: 'update a specific ship'
    });
  },


  /**
   * `Api/v1/ShipController.destroy()`
	 * @method DELETE
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!',
			route: 'ship/:id',
			should: 'delete a specific ship'
    });
  }
};
