"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateManyLocationInputEnvelope_1 = require("../inputs/ProductCreateManyLocationInputEnvelope");
const ProductCreateOrConnectWithoutLocationInput_1 = require("../inputs/ProductCreateOrConnectWithoutLocationInput");
const ProductCreateWithoutLocationInput_1 = require("../inputs/ProductCreateWithoutLocationInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutLocationInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutLocationInput");
const ProductUpdateWithWhereUniqueWithoutLocationInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutLocationInput");
const ProductUpsertWithWhereUniqueWithoutLocationInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutLocationInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutLocationInput = class ProductUpdateManyWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateWithoutLocationInput_1.ProductCreateWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutLocationInput_1.ProductCreateOrConnectWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutLocationInput_1.ProductUpsertWithWhereUniqueWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateManyLocationInputEnvelope_1.ProductCreateManyLocationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateManyLocationInputEnvelope_1.ProductCreateManyLocationInputEnvelope)
], ProductUpdateManyWithoutLocationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutLocationInput_1.ProductUpdateWithWhereUniqueWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutLocationInput_1.ProductUpdateManyWithWhereWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutLocationInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateManyWithoutLocationInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutLocationInput);
exports.ProductUpdateManyWithoutLocationInput = ProductUpdateManyWithoutLocationInput;
