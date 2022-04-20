"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_TypeCountOrderByAggregateInput = class Product_TypeCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeCountOrderByAggregateInput.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeCountOrderByAggregateInput.prototype, "description", void 0);
Product_TypeCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeCountOrderByAggregateInput", {
        isAbstract: true
    })
], Product_TypeCountOrderByAggregateInput);
exports.Product_TypeCountOrderByAggregateInput = Product_TypeCountOrderByAggregateInput;
