"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductAvgAggregate_1 = require("../outputs/ProductAvgAggregate");
const ProductCountAggregate_1 = require("../outputs/ProductCountAggregate");
const ProductMaxAggregate_1 = require("../outputs/ProductMaxAggregate");
const ProductMinAggregate_1 = require("../outputs/ProductMinAggregate");
const ProductSumAggregate_1 = require("../outputs/ProductSumAggregate");
let ProductGroupBy = class ProductGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductGroupBy.prototype, "id_product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "imei", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductGroupBy.prototype, "product_typeId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "tecnology", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "conectivity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductGroupBy.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductGroupBy.prototype, "historial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCountAggregate_1.ProductCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCountAggregate_1.ProductCountAggregate)
], ProductGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductAvgAggregate_1.ProductAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductAvgAggregate_1.ProductAvgAggregate)
], ProductGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductSumAggregate_1.ProductSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductSumAggregate_1.ProductSumAggregate)
], ProductGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductMinAggregate_1.ProductMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductMinAggregate_1.ProductMinAggregate)
], ProductGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductMaxAggregate_1.ProductMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductMaxAggregate_1.ProductMaxAggregate)
], ProductGroupBy.prototype, "_max", void 0);
ProductGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductGroupBy", {
        isAbstract: true
    })
], ProductGroupBy);
exports.ProductGroupBy = ProductGroupBy;
