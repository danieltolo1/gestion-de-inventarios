"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SoftwareComputerUpdateOneRequiredWithoutProgramInput_1 = require("../inputs/SoftwareComputerUpdateOneRequiredWithoutProgramInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProgramUpdateInput = class ProgramUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProgramUpdateInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProgramUpdateInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProgramUpdateInput.prototype, "license_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpdateOneRequiredWithoutProgramInput_1.SoftwareComputerUpdateOneRequiredWithoutProgramInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpdateOneRequiredWithoutProgramInput_1.SoftwareComputerUpdateOneRequiredWithoutProgramInput)
], ProgramUpdateInput.prototype, "softwarecomputer", void 0);
ProgramUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpdateInput", {
        isAbstract: true
    })
], ProgramUpdateInput);
exports.ProgramUpdateInput = ProgramUpdateInput;
