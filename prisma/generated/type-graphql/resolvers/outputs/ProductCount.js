"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductCount = class ProductCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductCount.prototype, "maintenance", void 0);
ProductCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductCount", {
        isAbstract: true
    })
], ProductCount);
exports.ProductCount = ProductCount;
