"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateManyUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let MovimientoInventarioCreateManyUsuarioInput = class MovimientoInventarioCreateManyUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCreateManyUsuarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCreateManyUsuarioInput.prototype, "inventarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCreateManyUsuarioInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCreateManyUsuarioInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MovimientoInventarioCreateManyUsuarioInput.prototype, "fecha", void 0);
MovimientoInventarioCreateManyUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateManyUsuarioInput", {
        isAbstract: true
    })
], MovimientoInventarioCreateManyUsuarioInput);
exports.MovimientoInventarioCreateManyUsuarioInput = MovimientoInventarioCreateManyUsuarioInput;
