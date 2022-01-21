"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoWhereInput_1 = require("../../../inputs/ProductoWhereInput");
let DeleteManyProductoArgs = class DeleteManyProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereInput_1.ProductoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereInput_1.ProductoWhereInput)
], DeleteManyProductoArgs.prototype, "where", void 0);
DeleteManyProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyProductoArgs);
exports.DeleteManyProductoArgs = DeleteManyProductoArgs;
