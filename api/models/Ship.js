/**
* Ship.js
*
* @description :: THe model representing ship types in the DB
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    shipType: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string',
      defaultsTo: 'Should add description'
    }
  }
};
