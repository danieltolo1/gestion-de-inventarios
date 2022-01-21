"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCountOrderByAggregateInput_1 = require("../inputs/ProductoCountOrderByAggregateInput");
const ProductoMaxOrderByAggregateInput_1 = require("../inputs/ProductoMaxOrderByAggregateInput");
const ProductoMinOrderByAggregateInput_1 = require("../inputs/ProductoMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductoOrderByWithAggregationInput = class ProductoOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoOrderByWithAggregationInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoOrderByWithAggregationInput.prototype, "foto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCountOrderByAggregateInput_1.ProductoCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCountOrderByAggregateInput_1.ProductoCountOrderByAggregateInput)
], ProductoOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoMaxOrderByAggregateInput_1.ProductoMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoMaxOrderByAggregateInput_1.ProductoMaxOrderByAggregateInput)
], ProductoOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoMinOrderByAggregateInput_1.ProductoMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoMinOrderByAggregateInput_1.ProductoMinOrderByAggregateInput)
], ProductoOrderByWithAggregationInput.prototype, "_min", void 0);
ProductoOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoOrderByWithAggregationInput", {
        isAbstract: true
    })
], ProductoOrderByWithAggregationInput);
exports.ProductoOrderByWithAggregationInput = ProductoOrderByWithAggregationInput;
