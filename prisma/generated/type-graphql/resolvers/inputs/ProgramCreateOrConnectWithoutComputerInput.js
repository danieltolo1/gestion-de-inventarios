"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateOrConnectWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateWithoutComputerInput_1 = require("../inputs/ProgramCreateWithoutComputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramCreateOrConnectWithoutComputerInput = class ProgramCreateOrConnectWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], ProgramCreateOrConnectWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateWithoutComputerInput_1.ProgramCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateWithoutComputerInput_1.ProgramCreateWithoutComputerInput)
], ProgramCreateOrConnectWithoutComputerInput.prototype, "create", void 0);
ProgramCreateOrConnectWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateOrConnectWithoutComputerInput", {
        isAbstract: true
    })
], ProgramCreateOrConnectWithoutComputerInput);
exports.ProgramCreateOrConnectWithoutComputerInput = ProgramCreateOrConnectWithoutComputerInput;
