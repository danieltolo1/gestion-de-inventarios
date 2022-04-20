"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateManyStateInputEnvelope_1 = require("../inputs/ProductCreateManyStateInputEnvelope");
const ProductCreateOrConnectWithoutStateInput_1 = require("../inputs/ProductCreateOrConnectWithoutStateInput");
const ProductCreateWithoutStateInput_1 = require("../inputs/ProductCreateWithoutStateInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutStateInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutStateInput");
const ProductUpdateWithWhereUniqueWithoutStateInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutStateInput");
const ProductUpsertWithWhereUniqueWithoutStateInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutStateInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutStateInput = class ProductUpdateManyWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateWithoutStateInput_1.ProductCreateWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutStateInput_1.ProductCreateOrConnectWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutStateInput_1.ProductUpsertWithWhereUniqueWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateManyStateInputEnvelope_1.ProductCreateManyStateInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateManyStateInputEnvelope_1.ProductCreateManyStateInputEnvelope)
], ProductUpdateManyWithoutStateInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutStateInput_1.ProductUpdateWithWhereUniqueWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutStateInput_1.ProductUpdateManyWithWhereWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutStateInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateManyWithoutStateInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutStateInput);
exports.ProductUpdateManyWithoutStateInput = ProductUpdateManyWithoutStateInput;
