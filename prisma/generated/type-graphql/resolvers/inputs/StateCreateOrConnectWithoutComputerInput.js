"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCreateOrConnectWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateWithoutComputerInput_1 = require("../inputs/StateCreateWithoutComputerInput");
const StateWhereUniqueInput_1 = require("../inputs/StateWhereUniqueInput");
let StateCreateOrConnectWithoutComputerInput = class StateCreateOrConnectWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], StateCreateOrConnectWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateWithoutComputerInput_1.StateCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateWithoutComputerInput_1.StateCreateWithoutComputerInput)
], StateCreateOrConnectWithoutComputerInput.prototype, "create", void 0);
StateCreateOrConnectWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateCreateOrConnectWithoutComputerInput", {
        isAbstract: true
    })
], StateCreateOrConnectWithoutComputerInput);
exports.StateCreateOrConnectWithoutComputerInput = StateCreateOrConnectWithoutComputerInput;
