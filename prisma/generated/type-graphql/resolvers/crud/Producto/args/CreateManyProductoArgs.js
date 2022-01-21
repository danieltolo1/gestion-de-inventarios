"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProductoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCreateManyInput_1 = require("../../../inputs/ProductoCreateManyInput");
let CreateManyProductoArgs = class CreateManyProductoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoCreateManyInput_1.ProductoCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyProductoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyProductoArgs.prototype, "skipDuplicates", void 0);
CreateManyProductoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyProductoArgs);
exports.CreateManyProductoArgs = CreateManyProductoArgs;
