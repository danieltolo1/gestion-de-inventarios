"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeAvgOrderByAggregateInput_1 = require("../inputs/Product_TypeAvgOrderByAggregateInput");
const Product_TypeCountOrderByAggregateInput_1 = require("../inputs/Product_TypeCountOrderByAggregateInput");
const Product_TypeMaxOrderByAggregateInput_1 = require("../inputs/Product_TypeMaxOrderByAggregateInput");
const Product_TypeMinOrderByAggregateInput_1 = require("../inputs/Product_TypeMinOrderByAggregateInput");
const Product_TypeSumOrderByAggregateInput_1 = require("../inputs/Product_TypeSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_TypeOrderByWithAggregationInput = class Product_TypeOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeOrderByWithAggregationInput.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeOrderByWithAggregationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCountOrderByAggregateInput_1.Product_TypeCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCountOrderByAggregateInput_1.Product_TypeCountOrderByAggregateInput)
], Product_TypeOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeAvgOrderByAggregateInput_1.Product_TypeAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeAvgOrderByAggregateInput_1.Product_TypeAvgOrderByAggregateInput)
], Product_TypeOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeMaxOrderByAggregateInput_1.Product_TypeMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeMaxOrderByAggregateInput_1.Product_TypeMaxOrderByAggregateInput)
], Product_TypeOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeMinOrderByAggregateInput_1.Product_TypeMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeMinOrderByAggregateInput_1.Product_TypeMinOrderByAggregateInput)
], Product_TypeOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeSumOrderByAggregateInput_1.Product_TypeSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeSumOrderByAggregateInput_1.Product_TypeSumOrderByAggregateInput)
], Product_TypeOrderByWithAggregationInput.prototype, "_sum", void 0);
Product_TypeOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeOrderByWithAggregationInput", {
        isAbstract: true
    })
], Product_TypeOrderByWithAggregationInput);
exports.Product_TypeOrderByWithAggregationInput = Product_TypeOrderByWithAggregationInput;
