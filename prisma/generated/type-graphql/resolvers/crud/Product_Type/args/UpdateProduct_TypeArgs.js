"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeUpdateInput_1 = require("../../../inputs/Product_TypeUpdateInput");
const Product_TypeWhereUniqueInput_1 = require("../../../inputs/Product_TypeWhereUniqueInput");
let UpdateProduct_TypeArgs = class UpdateProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeUpdateInput_1.Product_TypeUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeUpdateInput_1.Product_TypeUpdateInput)
], UpdateProduct_TypeArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput)
], UpdateProduct_TypeArgs.prototype, "where", void 0);
UpdateProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateProduct_TypeArgs);
exports.UpdateProduct_TypeArgs = UpdateProduct_TypeArgs;
