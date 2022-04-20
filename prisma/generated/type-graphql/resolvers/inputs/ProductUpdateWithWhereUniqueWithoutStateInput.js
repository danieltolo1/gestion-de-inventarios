"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductUpdateWithoutStateInput_1 = require("../inputs/ProductUpdateWithoutStateInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutStateInput = class ProductUpdateWithWhereUniqueWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutStateInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutStateInput_1.ProductUpdateWithoutStateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutStateInput_1.ProductUpdateWithoutStateInput)
], ProductUpdateWithWhereUniqueWithoutStateInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutStateInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutStateInput);
exports.ProductUpdateWithWhereUniqueWithoutStateInput = ProductUpdateWithWhereUniqueWithoutStateInput;
