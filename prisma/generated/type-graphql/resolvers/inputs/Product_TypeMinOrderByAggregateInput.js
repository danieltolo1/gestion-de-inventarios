"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_TypeMinOrderByAggregateInput = class Product_TypeMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeMinOrderByAggregateInput.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeMinOrderByAggregateInput.prototype, "description", void 0);
Product_TypeMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeMinOrderByAggregateInput", {
        isAbstract: true
    })
], Product_TypeMinOrderByAggregateInput);
exports.Product_TypeMinOrderByAggregateInput = Product_TypeMinOrderByAggregateInput;
