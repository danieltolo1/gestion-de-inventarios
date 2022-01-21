"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoOrderByWithRelationInput_1 = require("../../../inputs/ProductoOrderByWithRelationInput");
const ProductoWhereInput_1 = require("../../../inputs/ProductoWhereInput");
const ProductoWhereUniqueInput_1 = require("../../../inputs/ProductoWhereUniqueInput");
const ProductoScalarFieldEnum_1 = require("../../../../enums/ProductoScalarFieldEnum");
let FindFirstProductoArgs = class FindFirstProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereInput_1.ProductoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereInput_1.ProductoWhereInput)
], FindFirstProductoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoOrderByWithRelationInput_1.ProductoOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstProductoArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], FindFirstProductoArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstProductoArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstProductoArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoScalarFieldEnum_1.ProductoScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstProductoArgs.prototype, "distinct", void 0);
FindFirstProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstProductoArgs);
exports.FindFirstProductoArgs = FindFirstProductoArgs;
