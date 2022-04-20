"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateUpdateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateManyWithoutStateInput_1 = require("../inputs/ComputerUpdateManyWithoutStateInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StateUpdateWithoutProductInput = class StateUpdateWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StateUpdateWithoutProductInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateManyWithoutStateInput_1.ComputerUpdateManyWithoutStateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyWithoutStateInput_1.ComputerUpdateManyWithoutStateInput)
], StateUpdateWithoutProductInput.prototype, "computer", void 0);
StateUpdateWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateUpdateWithoutProductInput", {
        isAbstract: true
    })
], StateUpdateWithoutProductInput);
exports.StateUpdateWithoutProductInput = StateUpdateWithoutProductInput;
