/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerPetstore);
  }
}(this, function(expect, SwaggerPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerPetstore.Body1();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Body1', function() {
    it('should create an instance of Body1', function() {
      // uncomment below and update the code to test Body1
      //var instane = new SwaggerPetstore.Body1();
      //expect(instance).to.be.a(SwaggerPetstore.Body1);
    });

    it('should have the property additionalMetadata (base name: "additionalMetadata")', function() {
      // uncomment below and update the code to test the property additionalMetadata
      //var instane = new SwaggerPetstore.Body1();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instane = new SwaggerPetstore.Body1();
      //expect(instance).to.be();
    });

  });

}));
