"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutMaintenanceInput_1 = require("../inputs/ProductCreateWithoutMaintenanceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutMaintenanceInput = class ProductCreateOrConnectWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutMaintenanceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutMaintenanceInput_1.ProductCreateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutMaintenanceInput_1.ProductCreateWithoutMaintenanceInput)
], ProductCreateOrConnectWithoutMaintenanceInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutMaintenanceInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutMaintenanceInput);
exports.ProductCreateOrConnectWithoutMaintenanceInput = ProductCreateOrConnectWithoutMaintenanceInput;
