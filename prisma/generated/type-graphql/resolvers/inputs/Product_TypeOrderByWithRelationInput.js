"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductOrderByRelationAggregateInput_1 = require("../inputs/ProductOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_TypeOrderByWithRelationInput = class Product_TypeOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeOrderByWithRelationInput.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput)
], Product_TypeOrderByWithRelationInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeOrderByWithRelationInput.prototype, "description", void 0);
Product_TypeOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeOrderByWithRelationInput", {
        isAbstract: true
    })
], Product_TypeOrderByWithRelationInput);
exports.Product_TypeOrderByWithRelationInput = Product_TypeOrderByWithRelationInput;
