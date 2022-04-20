"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCreateNestedOneWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateOrConnectWithoutProgramInput_1 = require("../inputs/SoftwareComputerCreateOrConnectWithoutProgramInput");
const SoftwareComputerCreateWithoutProgramInput_1 = require("../inputs/SoftwareComputerCreateWithoutProgramInput");
const SoftwareComputerWhereUniqueInput_1 = require("../inputs/SoftwareComputerWhereUniqueInput");
let SoftwareComputerCreateNestedOneWithoutProgramInput = class SoftwareComputerCreateNestedOneWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateWithoutProgramInput_1.SoftwareComputerCreateWithoutProgramInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateWithoutProgramInput_1.SoftwareComputerCreateWithoutProgramInput)
], SoftwareComputerCreateNestedOneWithoutProgramInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateOrConnectWithoutProgramInput_1.SoftwareComputerCreateOrConnectWithoutProgramInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateOrConnectWithoutProgramInput_1.SoftwareComputerCreateOrConnectWithoutProgramInput)
], SoftwareComputerCreateNestedOneWithoutProgramInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], SoftwareComputerCreateNestedOneWithoutProgramInput.prototype, "connect", void 0);
SoftwareComputerCreateNestedOneWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerCreateNestedOneWithoutProgramInput", {
        isAbstract: true
    })
], SoftwareComputerCreateNestedOneWithoutProgramInput);
exports.SoftwareComputerCreateNestedOneWithoutProgramInput = SoftwareComputerCreateNestedOneWithoutProgramInput;
