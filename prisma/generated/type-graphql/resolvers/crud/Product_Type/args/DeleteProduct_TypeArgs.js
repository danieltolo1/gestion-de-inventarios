"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeWhereUniqueInput_1 = require("../../../inputs/Product_TypeWhereUniqueInput");
let DeleteProduct_TypeArgs = class DeleteProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput)
], DeleteProduct_TypeArgs.prototype, "where", void 0);
DeleteProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteProduct_TypeArgs);
exports.DeleteProduct_TypeArgs = DeleteProduct_TypeArgs;
