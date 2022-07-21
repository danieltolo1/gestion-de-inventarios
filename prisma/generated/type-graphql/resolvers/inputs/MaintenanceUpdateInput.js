"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateOneRequiredWithoutMaintenanceInput_1 = require("../inputs/ComputerUpdateOneRequiredWithoutMaintenanceInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductUpdateManyWithoutMaintenanceInput_1 = require("../inputs/ProductUpdateManyWithoutMaintenanceInput");
const UserUpdateOneRequiredWithoutMantenanceInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMantenanceInput");
let MaintenanceUpdateInput = class MaintenanceUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], MaintenanceUpdateInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MaintenanceUpdateInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMantenanceInput_1.UserUpdateOneRequiredWithoutMantenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneRequiredWithoutMantenanceInput_1.UserUpdateOneRequiredWithoutMantenanceInput)
], MaintenanceUpdateInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateOneRequiredWithoutMaintenanceInput_1.ComputerUpdateOneRequiredWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateOneRequiredWithoutMaintenanceInput_1.ComputerUpdateOneRequiredWithoutMaintenanceInput)
], MaintenanceUpdateInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutMaintenanceInput_1.ProductUpdateManyWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyWithoutMaintenanceInput_1.ProductUpdateManyWithoutMaintenanceInput)
], MaintenanceUpdateInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MaintenanceUpdateInput.prototype, "observation", void 0);
MaintenanceUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateInput", {
        isAbstract: true
    })
], MaintenanceUpdateInput);
exports.MaintenanceUpdateInput = MaintenanceUpdateInput;
