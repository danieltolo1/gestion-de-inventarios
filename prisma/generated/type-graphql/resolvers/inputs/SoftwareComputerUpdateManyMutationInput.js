"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_ArchitectureFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_ArchitectureFieldUpdateOperationsInput");
const EnumEnum_OperatigsystemFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_OperatigsystemFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SoftwareComputerUpdateManyMutationInput = class SoftwareComputerUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_OperatigsystemFieldUpdateOperationsInput_1.EnumEnum_OperatigsystemFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_OperatigsystemFieldUpdateOperationsInput_1.EnumEnum_OperatigsystemFieldUpdateOperationsInput)
], SoftwareComputerUpdateManyMutationInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SoftwareComputerUpdateManyMutationInput.prototype, "license_soA", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_ArchitectureFieldUpdateOperationsInput_1.EnumEnum_ArchitectureFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_ArchitectureFieldUpdateOperationsInput_1.EnumEnum_ArchitectureFieldUpdateOperationsInput)
], SoftwareComputerUpdateManyMutationInput.prototype, "architecture", void 0);
SoftwareComputerUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerUpdateManyMutationInput", {
        isAbstract: true
    })
], SoftwareComputerUpdateManyMutationInput);
exports.SoftwareComputerUpdateManyMutationInput = SoftwareComputerUpdateManyMutationInput;
