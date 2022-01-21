"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductoMaxAggregate = class ProductoMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoMaxAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoMaxAggregate.prototype, "foto", void 0);
ProductoMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductoMaxAggregate", {
        isAbstract: true
    })
], ProductoMaxAggregate);
exports.ProductoMaxAggregate = ProductoMaxAggregate;
