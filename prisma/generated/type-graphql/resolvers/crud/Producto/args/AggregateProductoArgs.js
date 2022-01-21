"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoOrderByWithRelationInput_1 = require("../../../inputs/ProductoOrderByWithRelationInput");
const ProductoWhereInput_1 = require("../../../inputs/ProductoWhereInput");
const ProductoWhereUniqueInput_1 = require("../../../inputs/ProductoWhereUniqueInput");
let AggregateProductoArgs = class AggregateProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereInput_1.ProductoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereInput_1.ProductoWhereInput)
], AggregateProductoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoOrderByWithRelationInput_1.ProductoOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateProductoArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], AggregateProductoArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateProductoArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateProductoArgs.prototype, "skip", void 0);
AggregateProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateProductoArgs);
exports.AggregateProductoArgs = AggregateProductoArgs;
