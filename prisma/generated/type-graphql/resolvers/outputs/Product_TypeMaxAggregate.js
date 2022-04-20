"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Product_TypeMaxAggregate = class Product_TypeMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeMaxAggregate.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeMaxAggregate.prototype, "description", void 0);
Product_TypeMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Product_TypeMaxAggregate", {
        isAbstract: true
    })
], Product_TypeMaxAggregate);
exports.Product_TypeMaxAggregate = Product_TypeMaxAggregate;
