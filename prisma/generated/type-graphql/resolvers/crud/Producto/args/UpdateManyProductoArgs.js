"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoUpdateManyMutationInput_1 = require("../../../inputs/ProductoUpdateManyMutationInput");
const ProductoWhereInput_1 = require("../../../inputs/ProductoWhereInput");
let UpdateManyProductoArgs = class UpdateManyProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoUpdateManyMutationInput_1.ProductoUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoUpdateManyMutationInput_1.ProductoUpdateManyMutationInput)
], UpdateManyProductoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereInput_1.ProductoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereInput_1.ProductoWhereInput)
], UpdateManyProductoArgs.prototype, "where", void 0);
UpdateManyProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyProductoArgs);
exports.UpdateManyProductoArgs = UpdateManyProductoArgs;
