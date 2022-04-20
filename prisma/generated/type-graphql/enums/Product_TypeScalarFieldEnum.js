"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Product_TypeScalarFieldEnum;
(function (Product_TypeScalarFieldEnum) {
    Product_TypeScalarFieldEnum["id_product_type"] = "id_product_type";
    Product_TypeScalarFieldEnum["description"] = "description";
})(Product_TypeScalarFieldEnum = exports.Product_TypeScalarFieldEnum || (exports.Product_TypeScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Product_TypeScalarFieldEnum, {
    name: "Product_TypeScalarFieldEnum",
    description: undefined,
});
