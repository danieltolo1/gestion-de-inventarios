"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioOrderByRelationAggregateInput_1 = require("../inputs/MovimientoInventarioOrderByRelationAggregateInput");
const ProductoOrderByWithRelationInput_1 = require("../inputs/ProductoOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InventarioOrderByWithRelationInput = class InventarioOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioOrderByWithRelationInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoOrderByWithRelationInput_1.ProductoOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoOrderByWithRelationInput_1.ProductoOrderByWithRelationInput)
], InventarioOrderByWithRelationInput.prototype, "producto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioOrderByWithRelationInput.prototype, "productoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioOrderByRelationAggregateInput_1.MovimientoInventarioOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioOrderByRelationAggregateInput_1.MovimientoInventarioOrderByRelationAggregateInput)
], InventarioOrderByWithRelationInput.prototype, "movimientoInventario", void 0);
InventarioOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioOrderByWithRelationInput", {
        isAbstract: true
    })
], InventarioOrderByWithRelationInput);
exports.InventarioOrderByWithRelationInput = InventarioOrderByWithRelationInput;
