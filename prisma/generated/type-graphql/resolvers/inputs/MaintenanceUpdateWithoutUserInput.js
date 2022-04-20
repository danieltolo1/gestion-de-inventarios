"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PartComputerUpdateManyWithoutMaintenanceInput_1 = require("../inputs/PartComputerUpdateManyWithoutMaintenanceInput");
let MaintenanceUpdateWithoutUserInput = class MaintenanceUpdateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], MaintenanceUpdateWithoutUserInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MaintenanceUpdateWithoutUserInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateManyWithoutMaintenanceInput_1.PartComputerUpdateManyWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateManyWithoutMaintenanceInput_1.PartComputerUpdateManyWithoutMaintenanceInput)
], MaintenanceUpdateWithoutUserInput.prototype, "partComputer", void 0);
MaintenanceUpdateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateWithoutUserInput", {
        isAbstract: true
    })
], MaintenanceUpdateWithoutUserInput);
exports.MaintenanceUpdateWithoutUserInput = MaintenanceUpdateWithoutUserInput;
