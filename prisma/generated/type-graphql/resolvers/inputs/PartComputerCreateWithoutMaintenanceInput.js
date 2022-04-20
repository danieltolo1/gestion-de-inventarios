"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedOneWithoutPartComputerInput_1 = require("../inputs/ComputerCreateNestedOneWithoutPartComputerInput");
const LocationCreateNestedOneWithoutPartComputerInput_1 = require("../inputs/LocationCreateNestedOneWithoutPartComputerInput");
const ProductCreateNestedOneWithoutPartcomputerInput_1 = require("../inputs/ProductCreateNestedOneWithoutPartcomputerInput");
let PartComputerCreateWithoutMaintenanceInput = class PartComputerCreateWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutPartcomputerInput_1.ProductCreateNestedOneWithoutPartcomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedOneWithoutPartcomputerInput_1.ProductCreateNestedOneWithoutPartcomputerInput)
], PartComputerCreateWithoutMaintenanceInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedOneWithoutPartComputerInput_1.ComputerCreateNestedOneWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedOneWithoutPartComputerInput_1.ComputerCreateNestedOneWithoutPartComputerInput)
], PartComputerCreateWithoutMaintenanceInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutPartComputerInput_1.LocationCreateNestedOneWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateNestedOneWithoutPartComputerInput_1.LocationCreateNestedOneWithoutPartComputerInput)
], PartComputerCreateWithoutMaintenanceInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCreateWithoutMaintenanceInput.prototype, "name_part", void 0);
PartComputerCreateWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateWithoutMaintenanceInput", {
        isAbstract: true
    })
], PartComputerCreateWithoutMaintenanceInput);
exports.PartComputerCreateWithoutMaintenanceInput = PartComputerCreateWithoutMaintenanceInput;
