"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let PartComputerUpdateManyMutationInput = class PartComputerUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PartComputerUpdateManyMutationInput.prototype, "name_part", void 0);
PartComputerUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateManyMutationInput", {
        isAbstract: true
    })
], PartComputerUpdateManyMutationInput);
exports.PartComputerUpdateManyMutationInput = PartComputerUpdateManyMutationInput;
