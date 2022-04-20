"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateOrConnectWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramCreateWithoutSoftwarecomputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramCreateOrConnectWithoutSoftwarecomputerInput = class ProgramCreateOrConnectWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], ProgramCreateOrConnectWithoutSoftwarecomputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateWithoutSoftwarecomputerInput_1.ProgramCreateWithoutSoftwarecomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateWithoutSoftwarecomputerInput_1.ProgramCreateWithoutSoftwarecomputerInput)
], ProgramCreateOrConnectWithoutSoftwarecomputerInput.prototype, "create", void 0);
ProgramCreateOrConnectWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateOrConnectWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ProgramCreateOrConnectWithoutSoftwarecomputerInput);
exports.ProgramCreateOrConnectWithoutSoftwarecomputerInput = ProgramCreateOrConnectWithoutSoftwarecomputerInput;
