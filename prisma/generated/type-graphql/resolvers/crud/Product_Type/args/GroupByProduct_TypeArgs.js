"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeOrderByWithAggregationInput_1 = require("../../../inputs/Product_TypeOrderByWithAggregationInput");
const Product_TypeScalarWhereWithAggregatesInput_1 = require("../../../inputs/Product_TypeScalarWhereWithAggregatesInput");
const Product_TypeWhereInput_1 = require("../../../inputs/Product_TypeWhereInput");
const Product_TypeScalarFieldEnum_1 = require("../../../../enums/Product_TypeScalarFieldEnum");
let GroupByProduct_TypeArgs = class GroupByProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereInput_1.Product_TypeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereInput_1.Product_TypeWhereInput)
], GroupByProduct_TypeArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Product_TypeOrderByWithAggregationInput_1.Product_TypeOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByProduct_TypeArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Product_TypeScalarFieldEnum_1.Product_TypeScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByProduct_TypeArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeScalarWhereWithAggregatesInput_1.Product_TypeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeScalarWhereWithAggregatesInput_1.Product_TypeScalarWhereWithAggregatesInput)
], GroupByProduct_TypeArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByProduct_TypeArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByProduct_TypeArgs.prototype, "skip", void 0);
GroupByProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByProduct_TypeArgs);
exports.GroupByProduct_TypeArgs = GroupByProduct_TypeArgs;
