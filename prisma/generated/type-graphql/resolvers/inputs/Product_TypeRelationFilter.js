"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeWhereInput_1 = require("../inputs/Product_TypeWhereInput");
let Product_TypeRelationFilter = class Product_TypeRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereInput_1.Product_TypeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereInput_1.Product_TypeWhereInput)
], Product_TypeRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereInput_1.Product_TypeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereInput_1.Product_TypeWhereInput)
], Product_TypeRelationFilter.prototype, "isNot", void 0);
Product_TypeRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeRelationFilter", {
        isAbstract: true
    })
], Product_TypeRelationFilter);
exports.Product_TypeRelationFilter = Product_TypeRelationFilter;
