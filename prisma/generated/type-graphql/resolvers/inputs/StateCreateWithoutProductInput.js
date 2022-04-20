"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCreateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedManyWithoutStateInput_1 = require("../inputs/ComputerCreateNestedManyWithoutStateInput");
let StateCreateWithoutProductInput = class StateCreateWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateCreateWithoutProductInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedManyWithoutStateInput_1.ComputerCreateNestedManyWithoutStateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedManyWithoutStateInput_1.ComputerCreateNestedManyWithoutStateInput)
], StateCreateWithoutProductInput.prototype, "computer", void 0);
StateCreateWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateCreateWithoutProductInput", {
        isAbstract: true
    })
], StateCreateWithoutProductInput);
exports.StateCreateWithoutProductInput = StateCreateWithoutProductInput;
