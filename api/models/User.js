/**
* User.js
*
* @description :: The model representing users in the DB
*/

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
      index: true
    },

    password: {
      type: 'string',
      required: true
    },

    role: {
      type: 'string',
      enum: ['admin', 'editor'],
      defaultsTo: 'editor'
    },

    api_key: {
      type: 'string',
      required: true,
      index: true,
      unique: true
    }
  },

  isAdmin: function (user) {
    User.findOne(user.id).exec(function (error, theUser) {
      if (error) {
        return false;
      } else if (theUser.role === 'admin') {
        return true;
      } else {
        return false;
      }
    });
  },

  isEditor: function (user) {
    User.findOne(user.id).exec(function (error, theUser) {
      if (error) {
        return false;
      } else if (theUser.role === 'editor') {
        return true;
      } else {
        return false;
      }
    });
  }
};
