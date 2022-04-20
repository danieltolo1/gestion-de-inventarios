"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProgramUpdateManyMutationInput = class ProgramUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProgramUpdateManyMutationInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProgramUpdateManyMutationInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProgramUpdateManyMutationInput.prototype, "license_program", void 0);
ProgramUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpdateManyMutationInput", {
        isAbstract: true
    })
], ProgramUpdateManyMutationInput);
exports.ProgramUpdateManyMutationInput = ProgramUpdateManyMutationInput;
