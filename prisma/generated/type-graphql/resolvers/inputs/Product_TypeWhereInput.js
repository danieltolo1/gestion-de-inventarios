"use strict";
var Product_TypeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let Product_TypeWhereInput = Product_TypeWhereInput_1 = class Product_TypeWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Product_TypeWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Product_TypeWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Product_TypeWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Product_TypeWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Product_TypeWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Product_TypeWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], Product_TypeWhereInput.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], Product_TypeWhereInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], Product_TypeWhereInput.prototype, "description", void 0);
Product_TypeWhereInput = Product_TypeWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeWhereInput", {
        isAbstract: true
    })
], Product_TypeWhereInput);
exports.Product_TypeWhereInput = Product_TypeWhereInput;
