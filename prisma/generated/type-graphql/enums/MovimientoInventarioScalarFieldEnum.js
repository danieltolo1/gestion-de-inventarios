"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var MovimientoInventarioScalarFieldEnum;
(function (MovimientoInventarioScalarFieldEnum) {
    MovimientoInventarioScalarFieldEnum["id"] = "id";
    MovimientoInventarioScalarFieldEnum["inventarioId"] = "inventarioId";
    MovimientoInventarioScalarFieldEnum["cantidad"] = "cantidad";
    MovimientoInventarioScalarFieldEnum["tipoMovimiento"] = "tipoMovimiento";
    MovimientoInventarioScalarFieldEnum["fecha"] = "fecha";
    MovimientoInventarioScalarFieldEnum["usuarioId"] = "usuarioId";
})(MovimientoInventarioScalarFieldEnum = exports.MovimientoInventarioScalarFieldEnum || (exports.MovimientoInventarioScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MovimientoInventarioScalarFieldEnum, {
    name: "MovimientoInventarioScalarFieldEnum",
    description: undefined,
});
