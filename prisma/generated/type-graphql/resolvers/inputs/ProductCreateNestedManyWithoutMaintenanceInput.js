"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateOrConnectWithoutMaintenanceInput_1 = require("../inputs/ProductCreateOrConnectWithoutMaintenanceInput");
const ProductCreateWithoutMaintenanceInput_1 = require("../inputs/ProductCreateWithoutMaintenanceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutMaintenanceInput = class ProductCreateNestedManyWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateWithoutMaintenanceInput_1.ProductCreateWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutMaintenanceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutMaintenanceInput_1.ProductCreateOrConnectWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutMaintenanceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutMaintenanceInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutMaintenanceInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutMaintenanceInput);
exports.ProductCreateNestedManyWithoutMaintenanceInput = ProductCreateNestedManyWithoutMaintenanceInput;
