"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateOneRequiredWithoutMaintenanceInput_1 = require("../inputs/ComputerUpdateOneRequiredWithoutMaintenanceInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutMantenanceInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMantenanceInput");
let MaintenanceUpdateWithoutProductInput = class MaintenanceUpdateWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], MaintenanceUpdateWithoutProductInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MaintenanceUpdateWithoutProductInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMantenanceInput_1.UserUpdateOneRequiredWithoutMantenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneRequiredWithoutMantenanceInput_1.UserUpdateOneRequiredWithoutMantenanceInput)
], MaintenanceUpdateWithoutProductInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateOneRequiredWithoutMaintenanceInput_1.ComputerUpdateOneRequiredWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateOneRequiredWithoutMaintenanceInput_1.ComputerUpdateOneRequiredWithoutMaintenanceInput)
], MaintenanceUpdateWithoutProductInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MaintenanceUpdateWithoutProductInput.prototype, "observation", void 0);
MaintenanceUpdateWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateWithoutProductInput", {
        isAbstract: true
    })
], MaintenanceUpdateWithoutProductInput);
exports.MaintenanceUpdateWithoutProductInput = MaintenanceUpdateWithoutProductInput;
