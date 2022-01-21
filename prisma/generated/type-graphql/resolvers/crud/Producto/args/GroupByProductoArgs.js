"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoOrderByWithAggregationInput_1 = require("../../../inputs/ProductoOrderByWithAggregationInput");
const ProductoScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProductoScalarWhereWithAggregatesInput");
const ProductoWhereInput_1 = require("../../../inputs/ProductoWhereInput");
const ProductoScalarFieldEnum_1 = require("../../../../enums/ProductoScalarFieldEnum");
let GroupByProductoArgs = class GroupByProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereInput_1.ProductoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereInput_1.ProductoWhereInput)
], GroupByProductoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoOrderByWithAggregationInput_1.ProductoOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByProductoArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoScalarFieldEnum_1.ProductoScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByProductoArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoScalarWhereWithAggregatesInput_1.ProductoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoScalarWhereWithAggregatesInput_1.ProductoScalarWhereWithAggregatesInput)
], GroupByProductoArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByProductoArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByProductoArgs.prototype, "skip", void 0);
GroupByProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByProductoArgs);
exports.GroupByProductoArgs = GroupByProductoArgs;
