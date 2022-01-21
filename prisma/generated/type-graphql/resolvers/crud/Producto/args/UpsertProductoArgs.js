"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCreateInput_1 = require("../../../inputs/ProductoCreateInput");
const ProductoUpdateInput_1 = require("../../../inputs/ProductoUpdateInput");
const ProductoWhereUniqueInput_1 = require("../../../inputs/ProductoWhereUniqueInput");
let UpsertProductoArgs = class UpsertProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], UpsertProductoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateInput_1.ProductoCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateInput_1.ProductoCreateInput)
], UpsertProductoArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoUpdateInput_1.ProductoUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoUpdateInput_1.ProductoUpdateInput)
], UpsertProductoArgs.prototype, "update", void 0);
UpsertProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertProductoArgs);
exports.UpsertProductoArgs = UpsertProductoArgs;
