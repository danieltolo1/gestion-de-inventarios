"use strict";
var MovimientoInventarioScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_TipoMovimientoFilter_1 = require("../inputs/EnumEnum_TipoMovimientoFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let MovimientoInventarioScalarWhereInput = MovimientoInventarioScalarWhereInput_1 = class MovimientoInventarioScalarWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], MovimientoInventarioScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], MovimientoInventarioScalarWhereInput.prototype, "inventarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], MovimientoInventarioScalarWhereInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoMovimientoFilter_1.EnumEnum_TipoMovimientoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoMovimientoFilter_1.EnumEnum_TipoMovimientoFilter)
], MovimientoInventarioScalarWhereInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], MovimientoInventarioScalarWhereInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], MovimientoInventarioScalarWhereInput.prototype, "usuarioId", void 0);
MovimientoInventarioScalarWhereInput = MovimientoInventarioScalarWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioScalarWhereInput", {
        isAbstract: true
    })
], MovimientoInventarioScalarWhereInput);
exports.MovimientoInventarioScalarWhereInput = MovimientoInventarioScalarWhereInput;
