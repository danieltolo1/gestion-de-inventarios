"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Product_TypeCountAggregate = class Product_TypeCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeCountAggregate.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeCountAggregate.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeCountAggregate.prototype, "_all", void 0);
Product_TypeCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Product_TypeCountAggregate", {
        isAbstract: true
    })
], Product_TypeCountAggregate);
exports.Product_TypeCountAggregate = Product_TypeCountAggregate;
