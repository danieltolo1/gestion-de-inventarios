"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutStateInput_1 = require("../inputs/ProductCreateWithoutStateInput");
const ProductUpdateWithoutStateInput_1 = require("../inputs/ProductUpdateWithoutStateInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutStateInput = class ProductUpsertWithWhereUniqueWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutStateInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutStateInput_1.ProductUpdateWithoutStateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutStateInput_1.ProductUpdateWithoutStateInput)
], ProductUpsertWithWhereUniqueWithoutStateInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutStateInput_1.ProductCreateWithoutStateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutStateInput_1.ProductCreateWithoutStateInput)
], ProductUpsertWithWhereUniqueWithoutStateInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutStateInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutStateInput);
exports.ProductUpsertWithWhereUniqueWithoutStateInput = ProductUpsertWithWhereUniqueWithoutStateInput;
