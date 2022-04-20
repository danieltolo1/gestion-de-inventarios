"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
let FindUniqueProductArgs = class FindUniqueProductArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], FindUniqueProductArgs.prototype, "where", void 0);
FindUniqueProductArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueProductArgs);
exports.FindUniqueProductArgs = FindUniqueProductArgs;
