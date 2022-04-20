"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateOneRequiredWithoutPartComputerInput_1 = require("../inputs/ComputerUpdateOneRequiredWithoutPartComputerInput");
const MaintenanceUpdateOneRequiredWithoutPartComputerInput_1 = require("../inputs/MaintenanceUpdateOneRequiredWithoutPartComputerInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductUpdateOneRequiredWithoutPartcomputerInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutPartcomputerInput");
let PartComputerUpdateWithoutLocationInput = class PartComputerUpdateWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutPartcomputerInput_1.ProductUpdateOneRequiredWithoutPartcomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateOneRequiredWithoutPartcomputerInput_1.ProductUpdateOneRequiredWithoutPartcomputerInput)
], PartComputerUpdateWithoutLocationInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateOneRequiredWithoutPartComputerInput_1.ComputerUpdateOneRequiredWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateOneRequiredWithoutPartComputerInput_1.ComputerUpdateOneRequiredWithoutPartComputerInput)
], PartComputerUpdateWithoutLocationInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateOneRequiredWithoutPartComputerInput_1.MaintenanceUpdateOneRequiredWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateOneRequiredWithoutPartComputerInput_1.MaintenanceUpdateOneRequiredWithoutPartComputerInput)
], PartComputerUpdateWithoutLocationInput.prototype, "maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PartComputerUpdateWithoutLocationInput.prototype, "name_part", void 0);
PartComputerUpdateWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateWithoutLocationInput", {
        isAbstract: true
    })
], PartComputerUpdateWithoutLocationInput);
exports.PartComputerUpdateWithoutLocationInput = PartComputerUpdateWithoutLocationInput;
