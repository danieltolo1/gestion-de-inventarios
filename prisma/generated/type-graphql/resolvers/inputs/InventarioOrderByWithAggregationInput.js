"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioAvgOrderByAggregateInput_1 = require("../inputs/InventarioAvgOrderByAggregateInput");
const InventarioCountOrderByAggregateInput_1 = require("../inputs/InventarioCountOrderByAggregateInput");
const InventarioMaxOrderByAggregateInput_1 = require("../inputs/InventarioMaxOrderByAggregateInput");
const InventarioMinOrderByAggregateInput_1 = require("../inputs/InventarioMinOrderByAggregateInput");
const InventarioSumOrderByAggregateInput_1 = require("../inputs/InventarioSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InventarioOrderByWithAggregationInput = class InventarioOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioOrderByWithAggregationInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioOrderByWithAggregationInput.prototype, "productoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCountOrderByAggregateInput_1.InventarioCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCountOrderByAggregateInput_1.InventarioCountOrderByAggregateInput)
], InventarioOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioAvgOrderByAggregateInput_1.InventarioAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioAvgOrderByAggregateInput_1.InventarioAvgOrderByAggregateInput)
], InventarioOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioMaxOrderByAggregateInput_1.InventarioMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioMaxOrderByAggregateInput_1.InventarioMaxOrderByAggregateInput)
], InventarioOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioMinOrderByAggregateInput_1.InventarioMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioMinOrderByAggregateInput_1.InventarioMinOrderByAggregateInput)
], InventarioOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioSumOrderByAggregateInput_1.InventarioSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioSumOrderByAggregateInput_1.InventarioSumOrderByAggregateInput)
], InventarioOrderByWithAggregationInput.prototype, "_sum", void 0);
InventarioOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioOrderByWithAggregationInput", {
        isAbstract: true
    })
], InventarioOrderByWithAggregationInput);
exports.InventarioOrderByWithAggregationInput = InventarioOrderByWithAggregationInput;
