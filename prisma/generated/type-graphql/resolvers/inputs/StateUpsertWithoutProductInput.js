"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateUpsertWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateWithoutProductInput_1 = require("../inputs/StateCreateWithoutProductInput");
const StateUpdateWithoutProductInput_1 = require("../inputs/StateUpdateWithoutProductInput");
let StateUpsertWithoutProductInput = class StateUpsertWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateUpdateWithoutProductInput_1.StateUpdateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateUpdateWithoutProductInput_1.StateUpdateWithoutProductInput)
], StateUpsertWithoutProductInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateWithoutProductInput_1.StateCreateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateWithoutProductInput_1.StateCreateWithoutProductInput)
], StateUpsertWithoutProductInput.prototype, "create", void 0);
StateUpsertWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateUpsertWithoutProductInput", {
        isAbstract: true
    })
], StateUpsertWithoutProductInput);
exports.StateUpsertWithoutProductInput = StateUpsertWithoutProductInput;
