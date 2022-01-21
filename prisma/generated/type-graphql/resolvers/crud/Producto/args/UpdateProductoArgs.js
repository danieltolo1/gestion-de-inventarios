"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoUpdateInput_1 = require("../../../inputs/ProductoUpdateInput");
const ProductoWhereUniqueInput_1 = require("../../../inputs/ProductoWhereUniqueInput");
let UpdateProductoArgs = class UpdateProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoUpdateInput_1.ProductoUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoUpdateInput_1.ProductoUpdateInput)
], UpdateProductoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], UpdateProductoArgs.prototype, "where", void 0);
UpdateProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateProductoArgs);
exports.UpdateProductoArgs = UpdateProductoArgs;
