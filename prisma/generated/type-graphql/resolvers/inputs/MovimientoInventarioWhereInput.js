"use strict";
var MovimientoInventarioWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_TipoMovimientoFilter_1 = require("../inputs/EnumEnum_TipoMovimientoFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const InventarioRelationFilter_1 = require("../inputs/InventarioRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let MovimientoInventarioWhereInput = MovimientoInventarioWhereInput_1 = class MovimientoInventarioWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], MovimientoInventarioWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioRelationFilter_1.InventarioRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioRelationFilter_1.InventarioRelationFilter)
], MovimientoInventarioWhereInput.prototype, "inventario", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], MovimientoInventarioWhereInput.prototype, "inventarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], MovimientoInventarioWhereInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoMovimientoFilter_1.EnumEnum_TipoMovimientoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoMovimientoFilter_1.EnumEnum_TipoMovimientoFilter)
], MovimientoInventarioWhereInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], MovimientoInventarioWhereInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserRelationFilter_1.UserRelationFilter)
], MovimientoInventarioWhereInput.prototype, "usuario", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], MovimientoInventarioWhereInput.prototype, "usuarioId", void 0);
MovimientoInventarioWhereInput = MovimientoInventarioWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioWhereInput", {
        isAbstract: true
    })
], MovimientoInventarioWhereInput);
exports.MovimientoInventarioWhereInput = MovimientoInventarioWhereInput;
