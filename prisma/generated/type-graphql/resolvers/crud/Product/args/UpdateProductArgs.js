"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductUpdateInput_1 = require("../../../inputs/ProductUpdateInput");
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
let UpdateProductArgs = class UpdateProductArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateInput_1.ProductUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateInput_1.ProductUpdateInput)
], UpdateProductArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], UpdateProductArgs.prototype, "where", void 0);
UpdateProductArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateProductArgs);
exports.UpdateProductArgs = UpdateProductArgs;
