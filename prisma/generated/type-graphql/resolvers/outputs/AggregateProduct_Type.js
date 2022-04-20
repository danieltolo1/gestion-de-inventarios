"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_Type = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeAvgAggregate_1 = require("../outputs/Product_TypeAvgAggregate");
const Product_TypeCountAggregate_1 = require("../outputs/Product_TypeCountAggregate");
const Product_TypeMaxAggregate_1 = require("../outputs/Product_TypeMaxAggregate");
const Product_TypeMinAggregate_1 = require("../outputs/Product_TypeMinAggregate");
const Product_TypeSumAggregate_1 = require("../outputs/Product_TypeSumAggregate");
let AggregateProduct_Type = class AggregateProduct_Type {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCountAggregate_1.Product_TypeCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCountAggregate_1.Product_TypeCountAggregate)
], AggregateProduct_Type.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeAvgAggregate_1.Product_TypeAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeAvgAggregate_1.Product_TypeAvgAggregate)
], AggregateProduct_Type.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeSumAggregate_1.Product_TypeSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeSumAggregate_1.Product_TypeSumAggregate)
], AggregateProduct_Type.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeMinAggregate_1.Product_TypeMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeMinAggregate_1.Product_TypeMinAggregate)
], AggregateProduct_Type.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeMaxAggregate_1.Product_TypeMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeMaxAggregate_1.Product_TypeMaxAggregate)
], AggregateProduct_Type.prototype, "_max", void 0);
AggregateProduct_Type = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateProduct_Type", {
        isAbstract: true
    })
], AggregateProduct_Type);
exports.AggregateProduct_Type = AggregateProduct_Type;
