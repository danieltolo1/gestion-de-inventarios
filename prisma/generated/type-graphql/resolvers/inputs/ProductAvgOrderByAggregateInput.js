"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductAvgOrderByAggregateInput = class ProductAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductAvgOrderByAggregateInput.prototype, "id_product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductAvgOrderByAggregateInput.prototype, "product_typeId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductAvgOrderByAggregateInput.prototype, "stateId", void 0);
ProductAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ProductAvgOrderByAggregateInput);
exports.ProductAvgOrderByAggregateInput = ProductAvgOrderByAggregateInput;
