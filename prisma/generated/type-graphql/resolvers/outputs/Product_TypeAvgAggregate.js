"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Product_TypeAvgAggregate = class Product_TypeAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeAvgAggregate.prototype, "id_product_type", void 0);
Product_TypeAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Product_TypeAvgAggregate", {
        isAbstract: true
    })
], Product_TypeAvgAggregate);
exports.Product_TypeAvgAggregate = Product_TypeAvgAggregate;
