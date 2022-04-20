"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductAvgAggregate_1 = require("../outputs/ProductAvgAggregate");
const ProductCountAggregate_1 = require("../outputs/ProductCountAggregate");
const ProductMaxAggregate_1 = require("../outputs/ProductMaxAggregate");
const ProductMinAggregate_1 = require("../outputs/ProductMinAggregate");
const ProductSumAggregate_1 = require("../outputs/ProductSumAggregate");
let AggregateProduct = class AggregateProduct {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCountAggregate_1.ProductCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCountAggregate_1.ProductCountAggregate)
], AggregateProduct.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductAvgAggregate_1.ProductAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductAvgAggregate_1.ProductAvgAggregate)
], AggregateProduct.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductSumAggregate_1.ProductSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductSumAggregate_1.ProductSumAggregate)
], AggregateProduct.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductMinAggregate_1.ProductMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductMinAggregate_1.ProductMinAggregate)
], AggregateProduct.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductMaxAggregate_1.ProductMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductMaxAggregate_1.ProductMaxAggregate)
], AggregateProduct.prototype, "_max", void 0);
AggregateProduct = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateProduct", {
        isAbstract: true
    })
], AggregateProduct);
exports.AggregateProduct = AggregateProduct;
