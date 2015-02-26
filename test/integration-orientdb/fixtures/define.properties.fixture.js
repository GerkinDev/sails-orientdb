/**
 * Dependencies
 */

var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({

  tableName : 'propertiesTable',
  identity : 'properties',
  connection : 'associations',

  attributes : {
    stringProp : {
      type : 'string'
    },
    textProp : 'text',
    jsonProp : 'json',
    floatProp : 'float',
    emailProp : 'email',
    propRequired : {
      type : 'string',
      required : true
    },
    modelProp : {
      model : 'indexes'
    },
    collectionProp : {
      collection : 'indexes',
      via : 'props'
    }
  }

});
