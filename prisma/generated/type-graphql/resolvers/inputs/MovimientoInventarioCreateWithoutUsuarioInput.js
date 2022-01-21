"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateNestedOneWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioCreateNestedOneWithoutMovimientoInventarioInput");
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let MovimientoInventarioCreateWithoutUsuarioInput = class MovimientoInventarioCreateWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCreateWithoutUsuarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCreateWithoutUsuarioInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCreateWithoutUsuarioInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MovimientoInventarioCreateWithoutUsuarioInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateNestedOneWithoutMovimientoInventarioInput_1.InventarioCreateNestedOneWithoutMovimientoInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateNestedOneWithoutMovimientoInventarioInput_1.InventarioCreateNestedOneWithoutMovimientoInventarioInput)
], MovimientoInventarioCreateWithoutUsuarioInput.prototype, "inventario", void 0);
MovimientoInventarioCreateWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateWithoutUsuarioInput", {
        isAbstract: true
    })
], MovimientoInventarioCreateWithoutUsuarioInput);
exports.MovimientoInventarioCreateWithoutUsuarioInput = MovimientoInventarioCreateWithoutUsuarioInput;
