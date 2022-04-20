"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_TypeMaxOrderByAggregateInput = class Product_TypeMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeMaxOrderByAggregateInput.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeMaxOrderByAggregateInput.prototype, "description", void 0);
Product_TypeMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeMaxOrderByAggregateInput", {
        isAbstract: true
    })
], Product_TypeMaxOrderByAggregateInput);
exports.Product_TypeMaxOrderByAggregateInput = Product_TypeMaxOrderByAggregateInput;
