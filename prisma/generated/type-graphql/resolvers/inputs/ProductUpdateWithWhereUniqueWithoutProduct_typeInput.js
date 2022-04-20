"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutProduct_typeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductUpdateWithoutProduct_typeInput_1 = require("../inputs/ProductUpdateWithoutProduct_typeInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutProduct_typeInput = class ProductUpdateWithWhereUniqueWithoutProduct_typeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutProduct_typeInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_typeInput_1.ProductUpdateWithoutProduct_typeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutProduct_typeInput_1.ProductUpdateWithoutProduct_typeInput)
], ProductUpdateWithWhereUniqueWithoutProduct_typeInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutProduct_typeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutProduct_typeInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutProduct_typeInput);
exports.ProductUpdateWithWhereUniqueWithoutProduct_typeInput = ProductUpdateWithWhereUniqueWithoutProduct_typeInput;
