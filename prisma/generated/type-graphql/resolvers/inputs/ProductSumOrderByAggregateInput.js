"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductSumOrderByAggregateInput = class ProductSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductSumOrderByAggregateInput.prototype, "id_product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductSumOrderByAggregateInput.prototype, "product_typeId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductSumOrderByAggregateInput.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductSumOrderByAggregateInput.prototype, "locationId", void 0);
ProductSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductSumOrderByAggregateInput", {
        isAbstract: true
    })
], ProductSumOrderByAggregateInput);
exports.ProductSumOrderByAggregateInput = ProductSumOrderByAggregateInput;
