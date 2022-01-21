"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_TipoMovimiento = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Enum_TipoMovimiento;
(function (Enum_TipoMovimiento) {
    Enum_TipoMovimiento["Entrada"] = "Entrada";
    Enum_TipoMovimiento["Salida"] = "Salida";
})(Enum_TipoMovimiento = exports.Enum_TipoMovimiento || (exports.Enum_TipoMovimiento = {}));
TypeGraphQL.registerEnumType(Enum_TipoMovimiento, {
    name: "Enum_TipoMovimiento",
    description: undefined,
});
