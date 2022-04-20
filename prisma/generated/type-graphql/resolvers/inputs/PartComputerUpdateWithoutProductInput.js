"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateOneRequiredWithoutPartComputerInput_1 = require("../inputs/ComputerUpdateOneRequiredWithoutPartComputerInput");
const LocationUpdateOneRequiredWithoutPartComputerInput_1 = require("../inputs/LocationUpdateOneRequiredWithoutPartComputerInput");
const MaintenanceUpdateOneRequiredWithoutPartComputerInput_1 = require("../inputs/MaintenanceUpdateOneRequiredWithoutPartComputerInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let PartComputerUpdateWithoutProductInput = class PartComputerUpdateWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateOneRequiredWithoutPartComputerInput_1.ComputerUpdateOneRequiredWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateOneRequiredWithoutPartComputerInput_1.ComputerUpdateOneRequiredWithoutPartComputerInput)
], PartComputerUpdateWithoutProductInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutPartComputerInput_1.LocationUpdateOneRequiredWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateOneRequiredWithoutPartComputerInput_1.LocationUpdateOneRequiredWithoutPartComputerInput)
], PartComputerUpdateWithoutProductInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateOneRequiredWithoutPartComputerInput_1.MaintenanceUpdateOneRequiredWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateOneRequiredWithoutPartComputerInput_1.MaintenanceUpdateOneRequiredWithoutPartComputerInput)
], PartComputerUpdateWithoutProductInput.prototype, "maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PartComputerUpdateWithoutProductInput.prototype, "name_part", void 0);
PartComputerUpdateWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateWithoutProductInput", {
        isAbstract: true
    })
], PartComputerUpdateWithoutProductInput);
exports.PartComputerUpdateWithoutProductInput = PartComputerUpdateWithoutProductInput;
