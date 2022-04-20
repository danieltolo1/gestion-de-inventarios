"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutProduct_typeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutProduct_typeInput_1 = require("../inputs/ProductCreateWithoutProduct_typeInput");
const ProductUpdateWithoutProduct_typeInput_1 = require("../inputs/ProductUpdateWithoutProduct_typeInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutProduct_typeInput = class ProductUpsertWithWhereUniqueWithoutProduct_typeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutProduct_typeInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_typeInput_1.ProductUpdateWithoutProduct_typeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutProduct_typeInput_1.ProductUpdateWithoutProduct_typeInput)
], ProductUpsertWithWhereUniqueWithoutProduct_typeInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutProduct_typeInput_1.ProductCreateWithoutProduct_typeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutProduct_typeInput_1.ProductCreateWithoutProduct_typeInput)
], ProductUpsertWithWhereUniqueWithoutProduct_typeInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutProduct_typeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutProduct_typeInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutProduct_typeInput);
exports.ProductUpsertWithWhereUniqueWithoutProduct_typeInput = ProductUpsertWithWhereUniqueWithoutProduct_typeInput;
