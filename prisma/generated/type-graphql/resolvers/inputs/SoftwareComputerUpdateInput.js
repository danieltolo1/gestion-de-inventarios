"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateManyWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerUpdateManyWithoutSoftwarecomputerInput");
const EnumEnum_ArchitectureFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_ArchitectureFieldUpdateOperationsInput");
const EnumEnum_OperatigsystemFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_OperatigsystemFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProgramUpdateManyWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramUpdateManyWithoutSoftwarecomputerInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SoftwareComputerUpdateInput = class SoftwareComputerUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateManyWithoutSoftwarecomputerInput_1.ComputerUpdateManyWithoutSoftwarecomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyWithoutSoftwarecomputerInput_1.ComputerUpdateManyWithoutSoftwarecomputerInput)
], SoftwareComputerUpdateInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_OperatigsystemFieldUpdateOperationsInput_1.EnumEnum_OperatigsystemFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_OperatigsystemFieldUpdateOperationsInput_1.EnumEnum_OperatigsystemFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "license_so", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "user_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "pass_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "user_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "pass_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "user_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "pass_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "user_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "pass_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_ArchitectureFieldUpdateOperationsInput_1.EnumEnum_ArchitectureFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_ArchitectureFieldUpdateOperationsInput_1.EnumEnum_ArchitectureFieldUpdateOperationsInput)
], SoftwareComputerUpdateInput.prototype, "architecture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateManyWithoutSoftwarecomputerInput_1.ProgramUpdateManyWithoutSoftwarecomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateManyWithoutSoftwarecomputerInput_1.ProgramUpdateManyWithoutSoftwarecomputerInput)
], SoftwareComputerUpdateInput.prototype, "program", void 0);
SoftwareComputerUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerUpdateInput", {
        isAbstract: true
    })
], SoftwareComputerUpdateInput);
exports.SoftwareComputerUpdateInput = SoftwareComputerUpdateInput;
