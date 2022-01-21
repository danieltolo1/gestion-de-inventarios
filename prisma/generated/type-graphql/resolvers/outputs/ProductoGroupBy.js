"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCountAggregate_1 = require("../outputs/ProductoCountAggregate");
const ProductoMaxAggregate_1 = require("../outputs/ProductoMaxAggregate");
const ProductoMinAggregate_1 = require("../outputs/ProductoMinAggregate");
let ProductoGroupBy = class ProductoGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoGroupBy.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoGroupBy.prototype, "foto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCountAggregate_1.ProductoCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCountAggregate_1.ProductoCountAggregate)
], ProductoGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoMinAggregate_1.ProductoMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoMinAggregate_1.ProductoMinAggregate)
], ProductoGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoMaxAggregate_1.ProductoMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoMaxAggregate_1.ProductoMaxAggregate)
], ProductoGroupBy.prototype, "_max", void 0);
ProductoGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductoGroupBy", {
        isAbstract: true
    })
], ProductoGroupBy);
exports.ProductoGroupBy = ProductoGroupBy;
