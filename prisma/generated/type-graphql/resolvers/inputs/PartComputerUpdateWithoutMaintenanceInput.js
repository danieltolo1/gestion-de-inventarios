"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateOneRequiredWithoutPartComputerInput_1 = require("../inputs/ComputerUpdateOneRequiredWithoutPartComputerInput");
const LocationUpdateOneRequiredWithoutPartComputerInput_1 = require("../inputs/LocationUpdateOneRequiredWithoutPartComputerInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductUpdateOneRequiredWithoutPartcomputerInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutPartcomputerInput");
let PartComputerUpdateWithoutMaintenanceInput = class PartComputerUpdateWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutPartcomputerInput_1.ProductUpdateOneRequiredWithoutPartcomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateOneRequiredWithoutPartcomputerInput_1.ProductUpdateOneRequiredWithoutPartcomputerInput)
], PartComputerUpdateWithoutMaintenanceInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateOneRequiredWithoutPartComputerInput_1.ComputerUpdateOneRequiredWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateOneRequiredWithoutPartComputerInput_1.ComputerUpdateOneRequiredWithoutPartComputerInput)
], PartComputerUpdateWithoutMaintenanceInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutPartComputerInput_1.LocationUpdateOneRequiredWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateOneRequiredWithoutPartComputerInput_1.LocationUpdateOneRequiredWithoutPartComputerInput)
], PartComputerUpdateWithoutMaintenanceInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PartComputerUpdateWithoutMaintenanceInput.prototype, "name_part", void 0);
PartComputerUpdateWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateWithoutMaintenanceInput", {
        isAbstract: true
    })
], PartComputerUpdateWithoutMaintenanceInput);
exports.PartComputerUpdateWithoutMaintenanceInput = PartComputerUpdateWithoutMaintenanceInput;
