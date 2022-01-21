"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoWhereInput_1 = require("../inputs/ProductoWhereInput");
let ProductoRelationFilter = class ProductoRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereInput_1.ProductoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereInput_1.ProductoWhereInput)
], ProductoRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereInput_1.ProductoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereInput_1.ProductoWhereInput)
], ProductoRelationFilter.prototype, "isNot", void 0);
ProductoRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoRelationFilter", {
        isAbstract: true
    })
], ProductoRelationFilter);
exports.ProductoRelationFilter = ProductoRelationFilter;
