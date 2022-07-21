"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductUpdateWithoutMaintenanceInput_1 = require("../inputs/ProductUpdateWithoutMaintenanceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutMaintenanceInput = class ProductUpdateWithWhereUniqueWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutMaintenanceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutMaintenanceInput_1.ProductUpdateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutMaintenanceInput_1.ProductUpdateWithoutMaintenanceInput)
], ProductUpdateWithWhereUniqueWithoutMaintenanceInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutMaintenanceInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutMaintenanceInput);
exports.ProductUpdateWithWhereUniqueWithoutMaintenanceInput = ProductUpdateWithWhereUniqueWithoutMaintenanceInput;
