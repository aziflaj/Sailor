/**
* Ship.js
*
* @description :: The model representing ship types in the DB
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    ship_type: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string',
      defaultsTo: 'Description missing'
    },

    details: {
      type: 'string',
      defaultsTo: 'Details missing'
    },

    img: {
      type: 'string',
      required: true
    }
  }
};
