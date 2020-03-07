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

import ApiClient from '../ApiClient';

/**
* The Order model module.
* @module model/Order
* @version 1.0.0
*/
export default class Order {
    /**
    * Constructs a new <code>Order</code>.
    * @alias module:model/Order
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Order} obj Optional instance to populate.
    * @return {module:model/Order} The populated <code>Order</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Order();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('petId')) {
                obj['petId'] = ApiClient.convertToType(data['petId'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('shipDate')) {
                obj['shipDate'] = ApiClient.convertToType(data['shipDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('complete')) {
                obj['complete'] = ApiClient.convertToType(data['complete'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {Number} petId
    */
    petId = undefined;
    /**
    * @member {Number} quantity
    */
    quantity = undefined;
    /**
    * @member {Date} shipDate
    */
    shipDate = undefined;
    /**
    * Order Status
    * @member {module:model/Order.StatusEnum} status
    */
    status = undefined;
    /**
    * @member {Boolean} complete
    * @default false
    */
    complete = false;



    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
        /**
         * value: "placed"
         * @const
         */
        "placed": "placed",
        /**
         * value: "approved"
         * @const
         */
        "approved": "approved",
        /**
         * value: "delivered"
         * @const
         */
        "delivered": "delivered"    };

}