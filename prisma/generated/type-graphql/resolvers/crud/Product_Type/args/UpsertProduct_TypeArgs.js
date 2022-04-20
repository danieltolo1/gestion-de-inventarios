"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeCreateInput_1 = require("../../../inputs/Product_TypeCreateInput");
const Product_TypeUpdateInput_1 = require("../../../inputs/Product_TypeUpdateInput");
const Product_TypeWhereUniqueInput_1 = require("../../../inputs/Product_TypeWhereUniqueInput");
let UpsertProduct_TypeArgs = class UpsertProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput)
], UpsertProduct_TypeArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateInput_1.Product_TypeCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateInput_1.Product_TypeCreateInput)
], UpsertProduct_TypeArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeUpdateInput_1.Product_TypeUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeUpdateInput_1.Product_TypeUpdateInput)
], UpsertProduct_TypeArgs.prototype, "update", void 0);
UpsertProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertProduct_TypeArgs);
exports.UpsertProduct_TypeArgs = UpsertProduct_TypeArgs;
