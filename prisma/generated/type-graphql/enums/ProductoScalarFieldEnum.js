"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var ProductoScalarFieldEnum;
(function (ProductoScalarFieldEnum) {
    ProductoScalarFieldEnum["id"] = "id";
    ProductoScalarFieldEnum["nombre"] = "nombre";
    ProductoScalarFieldEnum["foto"] = "foto";
})(ProductoScalarFieldEnum = exports.ProductoScalarFieldEnum || (exports.ProductoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductoScalarFieldEnum, {
    name: "ProductoScalarFieldEnum",
    description: undefined,
});
