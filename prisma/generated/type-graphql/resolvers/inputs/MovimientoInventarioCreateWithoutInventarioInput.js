"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateNestedOneWithoutMovimientosInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutMovimientosInput");
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let MovimientoInventarioCreateWithoutInventarioInput = class MovimientoInventarioCreateWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCreateWithoutInventarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCreateWithoutInventarioInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCreateWithoutInventarioInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MovimientoInventarioCreateWithoutInventarioInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutMovimientosInput_1.UsuarioCreateNestedOneWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateNestedOneWithoutMovimientosInput_1.UsuarioCreateNestedOneWithoutMovimientosInput)
], MovimientoInventarioCreateWithoutInventarioInput.prototype, "usuario", void 0);
MovimientoInventarioCreateWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateWithoutInventarioInput", {
        isAbstract: true
    })
], MovimientoInventarioCreateWithoutInventarioInput);
exports.MovimientoInventarioCreateWithoutInventarioInput = MovimientoInventarioCreateWithoutInventarioInput;
