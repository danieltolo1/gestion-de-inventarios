"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var ProductScalarFieldEnum;
(function (ProductScalarFieldEnum) {
    ProductScalarFieldEnum["id_product"] = "id_product";
    ProductScalarFieldEnum["internal_code"] = "internal_code";
    ProductScalarFieldEnum["serial_number"] = "serial_number";
    ProductScalarFieldEnum["imei"] = "imei";
    ProductScalarFieldEnum["observation"] = "observation";
    ProductScalarFieldEnum["picture"] = "picture";
    ProductScalarFieldEnum["model"] = "model";
    ProductScalarFieldEnum["product_typeId"] = "product_typeId";
    ProductScalarFieldEnum["size"] = "size";
    ProductScalarFieldEnum["tecnology"] = "tecnology";
    ProductScalarFieldEnum["conectivity"] = "conectivity";
    ProductScalarFieldEnum["stateId"] = "stateId";
    ProductScalarFieldEnum["locationId"] = "locationId";
    ProductScalarFieldEnum["historial"] = "historial";
})(ProductScalarFieldEnum = exports.ProductScalarFieldEnum || (exports.ProductScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
    name: "ProductScalarFieldEnum",
    description: undefined,
});
