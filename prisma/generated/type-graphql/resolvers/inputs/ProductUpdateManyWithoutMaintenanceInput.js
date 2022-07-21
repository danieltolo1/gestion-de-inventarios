"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateOrConnectWithoutMaintenanceInput_1 = require("../inputs/ProductCreateOrConnectWithoutMaintenanceInput");
const ProductCreateWithoutMaintenanceInput_1 = require("../inputs/ProductCreateWithoutMaintenanceInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutMaintenanceInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutMaintenanceInput");
const ProductUpdateWithWhereUniqueWithoutMaintenanceInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutMaintenanceInput");
const ProductUpsertWithWhereUniqueWithoutMaintenanceInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutMaintenanceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutMaintenanceInput = class ProductUpdateManyWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateWithoutMaintenanceInput_1.ProductCreateWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutMaintenanceInput_1.ProductCreateOrConnectWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutMaintenanceInput_1.ProductUpsertWithWhereUniqueWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutMaintenanceInput_1.ProductUpdateWithWhereUniqueWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutMaintenanceInput_1.ProductUpdateManyWithWhereWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductUpdateManyWithoutMaintenanceInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateManyWithoutMaintenanceInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutMaintenanceInput);
exports.ProductUpdateManyWithoutMaintenanceInput = ProductUpdateManyWithoutMaintenanceInput;
