"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoWhereUniqueInput_1 = require("../../../inputs/ProductoWhereUniqueInput");
let FindUniqueProductoArgs = class FindUniqueProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], FindUniqueProductoArgs.prototype, "where", void 0);
FindUniqueProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueProductoArgs);
exports.FindUniqueProductoArgs = FindUniqueProductoArgs;
