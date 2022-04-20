"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableFloatFieldUpdateOperationsInput_1 = require("../inputs/NullableFloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PartComputerUpdateManyWithoutComputerInput_1 = require("../inputs/PartComputerUpdateManyWithoutComputerInput");
const SoftwareComputerUpdateOneRequiredWithoutComputerInput_1 = require("../inputs/SoftwareComputerUpdateOneRequiredWithoutComputerInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ComputerUpdateWithoutStateInput = class ComputerUpdateWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "buy_date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "memory", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "hard_disk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "processor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "optical_unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpdateOneRequiredWithoutComputerInput_1.SoftwareComputerUpdateOneRequiredWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpdateOneRequiredWithoutComputerInput_1.SoftwareComputerUpdateOneRequiredWithoutComputerInput)
], ComputerUpdateWithoutStateInput.prototype, "softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateManyWithoutComputerInput_1.PartComputerUpdateManyWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateManyWithoutComputerInput_1.PartComputerUpdateManyWithoutComputerInput)
], ComputerUpdateWithoutStateInput.prototype, "partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ComputerUpdateWithoutStateInput.prototype, "historial", void 0);
ComputerUpdateWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateWithoutStateInput", {
        isAbstract: true
    })
], ComputerUpdateWithoutStateInput);
exports.ComputerUpdateWithoutStateInput = ComputerUpdateWithoutStateInput;
