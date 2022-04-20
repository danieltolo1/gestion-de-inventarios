"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_Type = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeCount_1 = require("../resolvers/outputs/Product_TypeCount");
let Product_Type = class Product_Type {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_Type.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_Type.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCount_1.Product_TypeCount, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCount_1.Product_TypeCount)
], Product_Type.prototype, "_count", void 0);
Product_Type = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Product_Type", {
        isAbstract: true
    })
], Product_Type);
exports.Product_Type = Product_Type;
