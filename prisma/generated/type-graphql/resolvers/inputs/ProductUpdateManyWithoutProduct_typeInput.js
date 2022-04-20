"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutProduct_typeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateManyProduct_typeInputEnvelope_1 = require("../inputs/ProductCreateManyProduct_typeInputEnvelope");
const ProductCreateOrConnectWithoutProduct_typeInput_1 = require("../inputs/ProductCreateOrConnectWithoutProduct_typeInput");
const ProductCreateWithoutProduct_typeInput_1 = require("../inputs/ProductCreateWithoutProduct_typeInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutProduct_typeInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutProduct_typeInput");
const ProductUpdateWithWhereUniqueWithoutProduct_typeInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutProduct_typeInput");
const ProductUpsertWithWhereUniqueWithoutProduct_typeInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutProduct_typeInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutProduct_typeInput = class ProductUpdateManyWithoutProduct_typeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateWithoutProduct_typeInput_1.ProductCreateWithoutProduct_typeInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProduct_typeInput_1.ProductCreateOrConnectWithoutProduct_typeInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutProduct_typeInput_1.ProductUpsertWithWhereUniqueWithoutProduct_typeInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateManyProduct_typeInputEnvelope_1.ProductCreateManyProduct_typeInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateManyProduct_typeInputEnvelope_1.ProductCreateManyProduct_typeInputEnvelope)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutProduct_typeInput_1.ProductUpdateWithWhereUniqueWithoutProduct_typeInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutProduct_typeInput_1.ProductUpdateManyWithWhereWithoutProduct_typeInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutProduct_typeInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutProduct_typeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateManyWithoutProduct_typeInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutProduct_typeInput);
exports.ProductUpdateManyWithoutProduct_typeInput = ProductUpdateManyWithoutProduct_typeInput;
