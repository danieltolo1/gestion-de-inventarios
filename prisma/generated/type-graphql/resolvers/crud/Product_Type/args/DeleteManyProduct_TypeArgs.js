"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeWhereInput_1 = require("../../../inputs/Product_TypeWhereInput");
let DeleteManyProduct_TypeArgs = class DeleteManyProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereInput_1.Product_TypeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereInput_1.Product_TypeWhereInput)
], DeleteManyProduct_TypeArgs.prototype, "where", void 0);
DeleteManyProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyProduct_TypeArgs);
exports.DeleteManyProduct_TypeArgs = DeleteManyProduct_TypeArgs;
