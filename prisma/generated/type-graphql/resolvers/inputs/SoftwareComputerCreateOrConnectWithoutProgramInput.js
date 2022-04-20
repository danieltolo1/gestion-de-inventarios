"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCreateOrConnectWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateWithoutProgramInput_1 = require("../inputs/SoftwareComputerCreateWithoutProgramInput");
const SoftwareComputerWhereUniqueInput_1 = require("../inputs/SoftwareComputerWhereUniqueInput");
let SoftwareComputerCreateOrConnectWithoutProgramInput = class SoftwareComputerCreateOrConnectWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], SoftwareComputerCreateOrConnectWithoutProgramInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateWithoutProgramInput_1.SoftwareComputerCreateWithoutProgramInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateWithoutProgramInput_1.SoftwareComputerCreateWithoutProgramInput)
], SoftwareComputerCreateOrConnectWithoutProgramInput.prototype, "create", void 0);
SoftwareComputerCreateOrConnectWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerCreateOrConnectWithoutProgramInput", {
        isAbstract: true
    })
], SoftwareComputerCreateOrConnectWithoutProgramInput);
exports.SoftwareComputerCreateOrConnectWithoutProgramInput = SoftwareComputerCreateOrConnectWithoutProgramInput;
