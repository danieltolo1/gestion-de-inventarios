"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StateUpdateManyMutationInput = class StateUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StateUpdateManyMutationInput.prototype, "description", void 0);
StateUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateUpdateManyMutationInput", {
        isAbstract: true
    })
], StateUpdateManyMutationInput);
exports.StateUpdateManyMutationInput = StateUpdateManyMutationInput;
