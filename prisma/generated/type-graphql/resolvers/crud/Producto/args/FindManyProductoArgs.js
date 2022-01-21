"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoOrderByWithRelationInput_1 = require("../../../inputs/ProductoOrderByWithRelationInput");
const ProductoWhereInput_1 = require("../../../inputs/ProductoWhereInput");
const ProductoWhereUniqueInput_1 = require("../../../inputs/ProductoWhereUniqueInput");
const ProductoScalarFieldEnum_1 = require("../../../../enums/ProductoScalarFieldEnum");
let FindManyProductoArgs = class FindManyProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereInput_1.ProductoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereInput_1.ProductoWhereInput)
], FindManyProductoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoOrderByWithRelationInput_1.ProductoOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyProductoArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], FindManyProductoArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyProductoArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyProductoArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoScalarFieldEnum_1.ProductoScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyProductoArgs.prototype, "distinct", void 0);
FindManyProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyProductoArgs);
exports.FindManyProductoArgs = FindManyProductoArgs;
