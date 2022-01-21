"use strict";
var InventarioWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const MovimientoInventarioListRelationFilter_1 = require("../inputs/MovimientoInventarioListRelationFilter");
const ProductoRelationFilter_1 = require("../inputs/ProductoRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let InventarioWhereInput = InventarioWhereInput_1 = class InventarioWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InventarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InventarioWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InventarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InventarioWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InventarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InventarioWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], InventarioWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], InventarioWhereInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoRelationFilter_1.ProductoRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoRelationFilter_1.ProductoRelationFilter)
], InventarioWhereInput.prototype, "producto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], InventarioWhereInput.prototype, "productoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioListRelationFilter_1.MovimientoInventarioListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioListRelationFilter_1.MovimientoInventarioListRelationFilter)
], InventarioWhereInput.prototype, "movimientoInventario", void 0);
InventarioWhereInput = InventarioWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioWhereInput", {
        isAbstract: true
    })
], InventarioWhereInput);
exports.InventarioWhereInput = InventarioWhereInput;
