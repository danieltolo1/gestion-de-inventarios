"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateNestedOneWithoutPartComputerInput_1 = require("../inputs/LocationCreateNestedOneWithoutPartComputerInput");
const MaintenanceCreateNestedOneWithoutPartComputerInput_1 = require("../inputs/MaintenanceCreateNestedOneWithoutPartComputerInput");
const ProductCreateNestedOneWithoutPartcomputerInput_1 = require("../inputs/ProductCreateNestedOneWithoutPartcomputerInput");
let PartComputerCreateWithoutComputerInput = class PartComputerCreateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutPartcomputerInput_1.ProductCreateNestedOneWithoutPartcomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedOneWithoutPartcomputerInput_1.ProductCreateNestedOneWithoutPartcomputerInput)
], PartComputerCreateWithoutComputerInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutPartComputerInput_1.LocationCreateNestedOneWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateNestedOneWithoutPartComputerInput_1.LocationCreateNestedOneWithoutPartComputerInput)
], PartComputerCreateWithoutComputerInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateNestedOneWithoutPartComputerInput_1.MaintenanceCreateNestedOneWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateNestedOneWithoutPartComputerInput_1.MaintenanceCreateNestedOneWithoutPartComputerInput)
], PartComputerCreateWithoutComputerInput.prototype, "maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCreateWithoutComputerInput.prototype, "name_part", void 0);
PartComputerCreateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateWithoutComputerInput", {
        isAbstract: true
    })
], PartComputerCreateWithoutComputerInput);
exports.PartComputerCreateWithoutComputerInput = PartComputerCreateWithoutComputerInput;
