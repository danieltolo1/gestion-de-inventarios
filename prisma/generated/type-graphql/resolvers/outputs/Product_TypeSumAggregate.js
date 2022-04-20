"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Product_TypeSumAggregate = class Product_TypeSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeSumAggregate.prototype, "id_product_type", void 0);
Product_TypeSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Product_TypeSumAggregate", {
        isAbstract: true
    })
], Product_TypeSumAggregate);
exports.Product_TypeSumAggregate = Product_TypeSumAggregate;
