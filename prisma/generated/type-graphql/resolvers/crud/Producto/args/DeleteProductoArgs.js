"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoWhereUniqueInput_1 = require("../../../inputs/ProductoWhereUniqueInput");
let DeleteProductoArgs = class DeleteProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], DeleteProductoArgs.prototype, "where", void 0);
DeleteProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteProductoArgs);
exports.DeleteProductoArgs = DeleteProductoArgs;
