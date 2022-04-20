"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCreateNestedOneWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateOrConnectWithoutComputerInput_1 = require("../inputs/StateCreateOrConnectWithoutComputerInput");
const StateCreateWithoutComputerInput_1 = require("../inputs/StateCreateWithoutComputerInput");
const StateWhereUniqueInput_1 = require("../inputs/StateWhereUniqueInput");
let StateCreateNestedOneWithoutComputerInput = class StateCreateNestedOneWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateWithoutComputerInput_1.StateCreateWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateWithoutComputerInput_1.StateCreateWithoutComputerInput)
], StateCreateNestedOneWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateOrConnectWithoutComputerInput_1.StateCreateOrConnectWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateOrConnectWithoutComputerInput_1.StateCreateOrConnectWithoutComputerInput)
], StateCreateNestedOneWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], StateCreateNestedOneWithoutComputerInput.prototype, "connect", void 0);
StateCreateNestedOneWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateCreateNestedOneWithoutComputerInput", {
        isAbstract: true
    })
], StateCreateNestedOneWithoutComputerInput);
exports.StateCreateNestedOneWithoutComputerInput = StateCreateNestedOneWithoutComputerInput;
