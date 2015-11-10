/**
 * Validator.js
 * A service for validating parameters
 */

module.exports = {

  validateShipParams: function (params) {
    var messages = [];
    var out = {};

    // add messages
    if (!params.ship_type) {
      messages.push('You should provide a \'ship_type\' field');
    }
    if (!params.description) {
      messages.push('You should provide a \'description\' field');
    }
    if (!params.details) {
      messages.push('You should provide a \'details\' field');
    }
    if (!params.img) {
      messages.push('You should provide a \'img\' field');
    }

    // return validation status
    if (_.isEmpty(messages)) {
      out = {
        valid: true,
        ship: {
          ship_type: params.ship_type,
          description: params.description,
          details: params.details,
          img: params.img
        }
      };
    } else {
      out = {
        valid: false,
        messages: messages
      }
    }

    return out;
  }

};
