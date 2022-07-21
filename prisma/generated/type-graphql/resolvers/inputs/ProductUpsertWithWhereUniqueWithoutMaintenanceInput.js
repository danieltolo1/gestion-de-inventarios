"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutMaintenanceInput_1 = require("../inputs/ProductCreateWithoutMaintenanceInput");
const ProductUpdateWithoutMaintenanceInput_1 = require("../inputs/ProductUpdateWithoutMaintenanceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutMaintenanceInput = class ProductUpsertWithWhereUniqueWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutMaintenanceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutMaintenanceInput_1.ProductUpdateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutMaintenanceInput_1.ProductUpdateWithoutMaintenanceInput)
], ProductUpsertWithWhereUniqueWithoutMaintenanceInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutMaintenanceInput_1.ProductCreateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutMaintenanceInput_1.ProductCreateWithoutMaintenanceInput)
], ProductUpsertWithWhereUniqueWithoutMaintenanceInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutMaintenanceInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutMaintenanceInput);
exports.ProductUpsertWithWhereUniqueWithoutMaintenanceInput = ProductUpsertWithWhereUniqueWithoutMaintenanceInput;
