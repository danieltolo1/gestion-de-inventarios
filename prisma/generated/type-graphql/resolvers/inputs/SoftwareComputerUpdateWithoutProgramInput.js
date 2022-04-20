"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerUpdateWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateManyWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerUpdateManyWithoutSoftwarecomputerInput");
const EnumEnum_ArchitectureFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_ArchitectureFieldUpdateOperationsInput");
const EnumEnum_OperatigsystemFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_OperatigsystemFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SoftwareComputerUpdateWithoutProgramInput = class SoftwareComputerUpdateWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateManyWithoutSoftwarecomputerInput_1.ComputerUpdateManyWithoutSoftwarecomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyWithoutSoftwarecomputerInput_1.ComputerUpdateManyWithoutSoftwarecomputerInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_OperatigsystemFieldUpdateOperationsInput_1.EnumEnum_OperatigsystemFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_OperatigsystemFieldUpdateOperationsInput_1.EnumEnum_OperatigsystemFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "license_so", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "user_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "pass_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "user_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "pass_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "user_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "pass_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "user_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "pass_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_ArchitectureFieldUpdateOperationsInput_1.EnumEnum_ArchitectureFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_ArchitectureFieldUpdateOperationsInput_1.EnumEnum_ArchitectureFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutProgramInput.prototype, "architecture", void 0);
SoftwareComputerUpdateWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerUpdateWithoutProgramInput", {
        isAbstract: true
    })
], SoftwareComputerUpdateWithoutProgramInput);
exports.SoftwareComputerUpdateWithoutProgramInput = SoftwareComputerUpdateWithoutProgramInput;
