"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedOneWithoutPartComputerInput_1 = require("../inputs/ComputerCreateNestedOneWithoutPartComputerInput");
const LocationCreateNestedOneWithoutPartComputerInput_1 = require("../inputs/LocationCreateNestedOneWithoutPartComputerInput");
const MaintenanceCreateNestedOneWithoutPartComputerInput_1 = require("../inputs/MaintenanceCreateNestedOneWithoutPartComputerInput");
const ProductCreateNestedOneWithoutPartcomputerInput_1 = require("../inputs/ProductCreateNestedOneWithoutPartcomputerInput");
let PartComputerCreateInput = class PartComputerCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutPartcomputerInput_1.ProductCreateNestedOneWithoutPartcomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedOneWithoutPartcomputerInput_1.ProductCreateNestedOneWithoutPartcomputerInput)
], PartComputerCreateInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedOneWithoutPartComputerInput_1.ComputerCreateNestedOneWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedOneWithoutPartComputerInput_1.ComputerCreateNestedOneWithoutPartComputerInput)
], PartComputerCreateInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutPartComputerInput_1.LocationCreateNestedOneWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateNestedOneWithoutPartComputerInput_1.LocationCreateNestedOneWithoutPartComputerInput)
], PartComputerCreateInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateNestedOneWithoutPartComputerInput_1.MaintenanceCreateNestedOneWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateNestedOneWithoutPartComputerInput_1.MaintenanceCreateNestedOneWithoutPartComputerInput)
], PartComputerCreateInput.prototype, "maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCreateInput.prototype, "name_part", void 0);
PartComputerCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateInput", {
        isAbstract: true
    })
], PartComputerCreateInput);
exports.PartComputerCreateInput = PartComputerCreateInput;
