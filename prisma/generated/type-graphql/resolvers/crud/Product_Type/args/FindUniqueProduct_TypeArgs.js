"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeWhereUniqueInput_1 = require("../../../inputs/Product_TypeWhereUniqueInput");
let FindUniqueProduct_TypeArgs = class FindUniqueProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput)
], FindUniqueProduct_TypeArgs.prototype, "where", void 0);
FindUniqueProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueProduct_TypeArgs);
exports.FindUniqueProduct_TypeArgs = FindUniqueProduct_TypeArgs;
