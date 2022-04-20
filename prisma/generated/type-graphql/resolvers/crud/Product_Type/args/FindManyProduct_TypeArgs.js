"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeOrderByWithRelationInput_1 = require("../../../inputs/Product_TypeOrderByWithRelationInput");
const Product_TypeWhereInput_1 = require("../../../inputs/Product_TypeWhereInput");
const Product_TypeWhereUniqueInput_1 = require("../../../inputs/Product_TypeWhereUniqueInput");
const Product_TypeScalarFieldEnum_1 = require("../../../../enums/Product_TypeScalarFieldEnum");
let FindManyProduct_TypeArgs = class FindManyProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereInput_1.Product_TypeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereInput_1.Product_TypeWhereInput)
], FindManyProduct_TypeArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Product_TypeOrderByWithRelationInput_1.Product_TypeOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyProduct_TypeArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput)
], FindManyProduct_TypeArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyProduct_TypeArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyProduct_TypeArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Product_TypeScalarFieldEnum_1.Product_TypeScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyProduct_TypeArgs.prototype, "distinct", void 0);
FindManyProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyProduct_TypeArgs);
exports.FindManyProduct_TypeArgs = FindManyProduct_TypeArgs;
