"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateUpsertWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateWithoutComputerInput_1 = require("../inputs/StateCreateWithoutComputerInput");
const StateUpdateWithoutComputerInput_1 = require("../inputs/StateUpdateWithoutComputerInput");
let StateUpsertWithoutComputerInput = class StateUpsertWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateUpdateWithoutComputerInput_1.StateUpdateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateUpdateWithoutComputerInput_1.StateUpdateWithoutComputerInput)
], StateUpsertWithoutComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateWithoutComputerInput_1.StateCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateWithoutComputerInput_1.StateCreateWithoutComputerInput)
], StateUpsertWithoutComputerInput.prototype, "create", void 0);
StateUpsertWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateUpsertWithoutComputerInput", {
        isAbstract: true
    })
], StateUpsertWithoutComputerInput);
exports.StateUpsertWithoutComputerInput = StateUpsertWithoutComputerInput;
