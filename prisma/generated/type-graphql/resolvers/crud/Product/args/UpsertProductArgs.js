"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateInput_1 = require("../../../inputs/ProductCreateInput");
const ProductUpdateInput_1 = require("../../../inputs/ProductUpdateInput");
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
let UpsertProductArgs = class UpsertProductArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], UpsertProductArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateInput_1.ProductCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateInput_1.ProductCreateInput)
], UpsertProductArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateInput_1.ProductUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateInput_1.ProductUpdateInput)
], UpsertProductArgs.prototype, "update", void 0);
UpsertProductArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertProductArgs);
exports.UpsertProductArgs = UpsertProductArgs;
