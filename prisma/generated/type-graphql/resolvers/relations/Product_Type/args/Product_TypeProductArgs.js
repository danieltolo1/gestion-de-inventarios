"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductOrderByWithRelationInput_1 = require("../../../inputs/ProductOrderByWithRelationInput");
const ProductWhereInput_1 = require("../../../inputs/ProductWhereInput");
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
const ProductScalarFieldEnum_1 = require("../../../../enums/ProductScalarFieldEnum");
let Product_TypeProductArgs = class Product_TypeProductArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereInput_1.ProductWhereInput)
], Product_TypeProductArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Product_TypeProductArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], Product_TypeProductArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeProductArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeProductArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductScalarFieldEnum_1.ProductScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Product_TypeProductArgs.prototype, "distinct", void 0);
Product_TypeProductArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], Product_TypeProductArgs);
exports.Product_TypeProductArgs = Product_TypeProductArgs;
