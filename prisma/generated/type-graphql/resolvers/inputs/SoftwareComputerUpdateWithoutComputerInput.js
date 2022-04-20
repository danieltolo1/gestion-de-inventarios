"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerUpdateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_ArchitectureFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_ArchitectureFieldUpdateOperationsInput");
const EnumEnum_OperatigsystemFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_OperatigsystemFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProgramUpdateManyWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramUpdateManyWithoutSoftwarecomputerInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SoftwareComputerUpdateWithoutComputerInput = class SoftwareComputerUpdateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_OperatigsystemFieldUpdateOperationsInput_1.EnumEnum_OperatigsystemFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_OperatigsystemFieldUpdateOperationsInput_1.EnumEnum_OperatigsystemFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "license_so", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "user_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "pass_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "user_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "pass_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "user_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "pass_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "user_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "pass_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_ArchitectureFieldUpdateOperationsInput_1.EnumEnum_ArchitectureFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_ArchitectureFieldUpdateOperationsInput_1.EnumEnum_ArchitectureFieldUpdateOperationsInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "architecture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateManyWithoutSoftwarecomputerInput_1.ProgramUpdateManyWithoutSoftwarecomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateManyWithoutSoftwarecomputerInput_1.ProgramUpdateManyWithoutSoftwarecomputerInput)
], SoftwareComputerUpdateWithoutComputerInput.prototype, "program", void 0);
SoftwareComputerUpdateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerUpdateWithoutComputerInput", {
        isAbstract: true
    })
], SoftwareComputerUpdateWithoutComputerInput);
exports.SoftwareComputerUpdateWithoutComputerInput = SoftwareComputerUpdateWithoutComputerInput;
