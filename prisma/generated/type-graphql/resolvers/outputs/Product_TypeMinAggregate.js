"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Product_TypeMinAggregate = class Product_TypeMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeMinAggregate.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeMinAggregate.prototype, "description", void 0);
Product_TypeMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Product_TypeMinAggregate", {
        isAbstract: true
    })
], Product_TypeMinAggregate);
exports.Product_TypeMinAggregate = Product_TypeMinAggregate;
