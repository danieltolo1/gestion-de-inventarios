"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateWithoutProductInput_1 = require("../inputs/StateCreateWithoutProductInput");
const StateWhereUniqueInput_1 = require("../inputs/StateWhereUniqueInput");
let StateCreateOrConnectWithoutProductInput = class StateCreateOrConnectWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], StateCreateOrConnectWithoutProductInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateWithoutProductInput_1.StateCreateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateWithoutProductInput_1.StateCreateWithoutProductInput)
], StateCreateOrConnectWithoutProductInput.prototype, "create", void 0);
StateCreateOrConnectWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateCreateOrConnectWithoutProductInput", {
        isAbstract: true
    })
], StateCreateOrConnectWithoutProductInput);
exports.StateCreateOrConnectWithoutProductInput = StateCreateOrConnectWithoutProductInput;
