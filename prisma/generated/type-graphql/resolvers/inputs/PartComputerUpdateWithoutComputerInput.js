"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationUpdateOneRequiredWithoutPartComputerInput_1 = require("../inputs/LocationUpdateOneRequiredWithoutPartComputerInput");
const MaintenanceUpdateOneRequiredWithoutPartComputerInput_1 = require("../inputs/MaintenanceUpdateOneRequiredWithoutPartComputerInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductUpdateOneRequiredWithoutPartcomputerInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutPartcomputerInput");
let PartComputerUpdateWithoutComputerInput = class PartComputerUpdateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutPartcomputerInput_1.ProductUpdateOneRequiredWithoutPartcomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateOneRequiredWithoutPartcomputerInput_1.ProductUpdateOneRequiredWithoutPartcomputerInput)
], PartComputerUpdateWithoutComputerInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutPartComputerInput_1.LocationUpdateOneRequiredWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateOneRequiredWithoutPartComputerInput_1.LocationUpdateOneRequiredWithoutPartComputerInput)
], PartComputerUpdateWithoutComputerInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateOneRequiredWithoutPartComputerInput_1.MaintenanceUpdateOneRequiredWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateOneRequiredWithoutPartComputerInput_1.MaintenanceUpdateOneRequiredWithoutPartComputerInput)
], PartComputerUpdateWithoutComputerInput.prototype, "maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PartComputerUpdateWithoutComputerInput.prototype, "name_part", void 0);
PartComputerUpdateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateWithoutComputerInput", {
        isAbstract: true
    })
], PartComputerUpdateWithoutComputerInput);
exports.PartComputerUpdateWithoutComputerInput = PartComputerUpdateWithoutComputerInput;
