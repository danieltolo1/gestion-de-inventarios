"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutLocationInput_1 = require("../inputs/ProductCreateWithoutLocationInput");
const ProductUpdateWithoutLocationInput_1 = require("../inputs/ProductUpdateWithoutLocationInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutLocationInput = class ProductUpsertWithWhereUniqueWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutLocationInput_1.ProductUpdateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutLocationInput_1.ProductUpdateWithoutLocationInput)
], ProductUpsertWithWhereUniqueWithoutLocationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutLocationInput_1.ProductCreateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutLocationInput_1.ProductCreateWithoutLocationInput)
], ProductUpsertWithWhereUniqueWithoutLocationInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutLocationInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutLocationInput);
exports.ProductUpsertWithWhereUniqueWithoutLocationInput = ProductUpsertWithWhereUniqueWithoutLocationInput;
