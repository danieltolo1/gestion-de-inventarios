"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductoCountAggregate = class ProductoCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductoCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductoCountAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductoCountAggregate.prototype, "foto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductoCountAggregate.prototype, "_all", void 0);
ProductoCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductoCountAggregate", {
        isAbstract: true
    })
], ProductoCountAggregate);
exports.ProductoCountAggregate = ProductoCountAggregate;
