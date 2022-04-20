"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_TypeSumOrderByAggregateInput = class Product_TypeSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeSumOrderByAggregateInput.prototype, "id_product_type", void 0);
Product_TypeSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeSumOrderByAggregateInput", {
        isAbstract: true
    })
], Product_TypeSumOrderByAggregateInput);
exports.Product_TypeSumOrderByAggregateInput = Product_TypeSumOrderByAggregateInput;
