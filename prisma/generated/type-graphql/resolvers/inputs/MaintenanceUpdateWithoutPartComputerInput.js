"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutMantenanceInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMantenanceInput");
let MaintenanceUpdateWithoutPartComputerInput = class MaintenanceUpdateWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], MaintenanceUpdateWithoutPartComputerInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MaintenanceUpdateWithoutPartComputerInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMantenanceInput_1.UserUpdateOneRequiredWithoutMantenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneRequiredWithoutMantenanceInput_1.UserUpdateOneRequiredWithoutMantenanceInput)
], MaintenanceUpdateWithoutPartComputerInput.prototype, "user", void 0);
MaintenanceUpdateWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateWithoutPartComputerInput", {
        isAbstract: true
    })
], MaintenanceUpdateWithoutPartComputerInput);
exports.MaintenanceUpdateWithoutPartComputerInput = MaintenanceUpdateWithoutPartComputerInput;
