"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductUpdateWithoutLocationInput_1 = require("../inputs/ProductUpdateWithoutLocationInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutLocationInput = class ProductUpdateWithWhereUniqueWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutLocationInput_1.ProductUpdateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutLocationInput_1.ProductUpdateWithoutLocationInput)
], ProductUpdateWithWhereUniqueWithoutLocationInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutLocationInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutLocationInput);
exports.ProductUpdateWithWhereUniqueWithoutLocationInput = ProductUpdateWithWhereUniqueWithoutLocationInput;
