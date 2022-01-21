"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var InventarioScalarFieldEnum;
(function (InventarioScalarFieldEnum) {
    InventarioScalarFieldEnum["id"] = "id";
    InventarioScalarFieldEnum["cantidad"] = "cantidad";
    InventarioScalarFieldEnum["productoId"] = "productoId";
})(InventarioScalarFieldEnum = exports.InventarioScalarFieldEnum || (exports.InventarioScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(InventarioScalarFieldEnum, {
    name: "InventarioScalarFieldEnum",
    description: undefined,
});
