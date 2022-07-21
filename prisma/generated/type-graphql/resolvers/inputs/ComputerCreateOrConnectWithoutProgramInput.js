"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateOrConnectWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutProgramInput_1 = require("../inputs/ComputerCreateWithoutProgramInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateOrConnectWithoutProgramInput = class ComputerCreateOrConnectWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerCreateOrConnectWithoutProgramInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutProgramInput_1.ComputerCreateWithoutProgramInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutProgramInput_1.ComputerCreateWithoutProgramInput)
], ComputerCreateOrConnectWithoutProgramInput.prototype, "create", void 0);
ComputerCreateOrConnectWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateOrConnectWithoutProgramInput", {
        isAbstract: true
    })
], ComputerCreateOrConnectWithoutProgramInput);
exports.ComputerCreateOrConnectWithoutProgramInput = ComputerCreateOrConnectWithoutProgramInput;
