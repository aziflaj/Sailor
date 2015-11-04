/**
* Ship.js
*
* @description :: THe model representing ship types in the DB
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
      defaultsTo: 'Should add description'
    },

    img: {
      type: 'string',
      required: true
    }
  }
};
