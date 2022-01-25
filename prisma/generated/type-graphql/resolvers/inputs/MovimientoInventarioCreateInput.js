"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateNestedOneWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioCreateNestedOneWithoutMovimientoInventarioInput");
const UserCreateNestedOneWithoutMovimientosInput_1 = require("../inputs/UserCreateNestedOneWithoutMovimientosInput");
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let MovimientoInventarioCreateInput = class MovimientoInventarioCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCreateInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCreateInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MovimientoInventarioCreateInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateNestedOneWithoutMovimientoInventarioInput_1.InventarioCreateNestedOneWithoutMovimientoInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateNestedOneWithoutMovimientoInventarioInput_1.InventarioCreateNestedOneWithoutMovimientoInventarioInput)
], MovimientoInventarioCreateInput.prototype, "inventario", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMovimientosInput_1.UserCreateNestedOneWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutMovimientosInput_1.UserCreateNestedOneWithoutMovimientosInput)
], MovimientoInventarioCreateInput.prototype, "usuario", void 0);
MovimientoInventarioCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateInput", {
        isAbstract: true
    })
], MovimientoInventarioCreateInput);
exports.MovimientoInventarioCreateInput = MovimientoInventarioCreateInput;
