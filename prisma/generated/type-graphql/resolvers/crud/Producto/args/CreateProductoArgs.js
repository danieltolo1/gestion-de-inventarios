"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCreateInput_1 = require("../../../inputs/ProductoCreateInput");
let CreateProductoArgs = class CreateProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateInput_1.ProductoCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateInput_1.ProductoCreateInput)
], CreateProductoArgs.prototype, "data", void 0);
CreateProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateProductoArgs);
exports.CreateProductoArgs = CreateProductoArgs;
