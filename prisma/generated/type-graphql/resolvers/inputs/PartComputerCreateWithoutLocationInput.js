"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedOneWithoutPartComputerInput_1 = require("../inputs/ComputerCreateNestedOneWithoutPartComputerInput");
const MaintenanceCreateNestedOneWithoutPartComputerInput_1 = require("../inputs/MaintenanceCreateNestedOneWithoutPartComputerInput");
const ProductCreateNestedOneWithoutPartcomputerInput_1 = require("../inputs/ProductCreateNestedOneWithoutPartcomputerInput");
let PartComputerCreateWithoutLocationInput = class PartComputerCreateWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutPartcomputerInput_1.ProductCreateNestedOneWithoutPartcomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedOneWithoutPartcomputerInput_1.ProductCreateNestedOneWithoutPartcomputerInput)
], PartComputerCreateWithoutLocationInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedOneWithoutPartComputerInput_1.ComputerCreateNestedOneWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedOneWithoutPartComputerInput_1.ComputerCreateNestedOneWithoutPartComputerInput)
], PartComputerCreateWithoutLocationInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateNestedOneWithoutPartComputerInput_1.MaintenanceCreateNestedOneWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateNestedOneWithoutPartComputerInput_1.MaintenanceCreateNestedOneWithoutPartComputerInput)
], PartComputerCreateWithoutLocationInput.prototype, "maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCreateWithoutLocationInput.prototype, "name_part", void 0);
PartComputerCreateWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateWithoutLocationInput", {
        isAbstract: true
    })
], PartComputerCreateWithoutLocationInput);
exports.PartComputerCreateWithoutLocationInput = PartComputerCreateWithoutLocationInput;
