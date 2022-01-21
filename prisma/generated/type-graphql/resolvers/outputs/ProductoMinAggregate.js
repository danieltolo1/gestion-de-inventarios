"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductoMinAggregate = class ProductoMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoMinAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoMinAggregate.prototype, "foto", void 0);
ProductoMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductoMinAggregate", {
        isAbstract: true
    })
], ProductoMinAggregate);
exports.ProductoMinAggregate = ProductoMinAggregate;
