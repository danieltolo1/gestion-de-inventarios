"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeAvgAggregate_1 = require("../outputs/Product_TypeAvgAggregate");
const Product_TypeCountAggregate_1 = require("../outputs/Product_TypeCountAggregate");
const Product_TypeMaxAggregate_1 = require("../outputs/Product_TypeMaxAggregate");
const Product_TypeMinAggregate_1 = require("../outputs/Product_TypeMinAggregate");
const Product_TypeSumAggregate_1 = require("../outputs/Product_TypeSumAggregate");
let Product_TypeGroupBy = class Product_TypeGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeGroupBy.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeGroupBy.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCountAggregate_1.Product_TypeCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCountAggregate_1.Product_TypeCountAggregate)
], Product_TypeGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeAvgAggregate_1.Product_TypeAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeAvgAggregate_1.Product_TypeAvgAggregate)
], Product_TypeGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeSumAggregate_1.Product_TypeSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeSumAggregate_1.Product_TypeSumAggregate)
], Product_TypeGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeMinAggregate_1.Product_TypeMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeMinAggregate_1.Product_TypeMinAggregate)
], Product_TypeGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeMaxAggregate_1.Product_TypeMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeMaxAggregate_1.Product_TypeMaxAggregate)
], Product_TypeGroupBy.prototype, "_max", void 0);
Product_TypeGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Product_TypeGroupBy", {
        isAbstract: true
    })
], Product_TypeGroupBy);
exports.Product_TypeGroupBy = Product_TypeGroupBy;
