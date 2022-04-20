"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_TypeAvgOrderByAggregateInput = class Product_TypeAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeAvgOrderByAggregateInput.prototype, "id_product_type", void 0);
Product_TypeAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Product_TypeAvgOrderByAggregateInput);
exports.Product_TypeAvgOrderByAggregateInput = Product_TypeAvgOrderByAggregateInput;
