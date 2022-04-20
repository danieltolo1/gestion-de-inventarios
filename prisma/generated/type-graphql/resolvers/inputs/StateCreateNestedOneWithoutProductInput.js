"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCreateNestedOneWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateOrConnectWithoutProductInput_1 = require("../inputs/StateCreateOrConnectWithoutProductInput");
const StateCreateWithoutProductInput_1 = require("../inputs/StateCreateWithoutProductInput");
const StateWhereUniqueInput_1 = require("../inputs/StateWhereUniqueInput");
let StateCreateNestedOneWithoutProductInput = class StateCreateNestedOneWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateWithoutProductInput_1.StateCreateWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateWithoutProductInput_1.StateCreateWithoutProductInput)
], StateCreateNestedOneWithoutProductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateOrConnectWithoutProductInput_1.StateCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateOrConnectWithoutProductInput_1.StateCreateOrConnectWithoutProductInput)
], StateCreateNestedOneWithoutProductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], StateCreateNestedOneWithoutProductInput.prototype, "connect", void 0);
StateCreateNestedOneWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateCreateNestedOneWithoutProductInput", {
        isAbstract: true
    })
], StateCreateNestedOneWithoutProductInput);
exports.StateCreateNestedOneWithoutProductInput = StateCreateNestedOneWithoutProductInput;
