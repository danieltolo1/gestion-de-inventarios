"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Product_TypeCount = class Product_TypeCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeCount.prototype, "product", void 0);
Product_TypeCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Product_TypeCount", {
        isAbstract: true
    })
], Product_TypeCount);
exports.Product_TypeCount = Product_TypeCount;
