"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateNestedManyWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateManySoftwarecomputerInputEnvelope_1 = require("../inputs/ProgramCreateManySoftwarecomputerInputEnvelope");
const ProgramCreateOrConnectWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramCreateOrConnectWithoutSoftwarecomputerInput");
const ProgramCreateWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramCreateWithoutSoftwarecomputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramCreateNestedManyWithoutSoftwarecomputerInput = class ProgramCreateNestedManyWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateWithoutSoftwarecomputerInput_1.ProgramCreateWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramCreateNestedManyWithoutSoftwarecomputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateOrConnectWithoutSoftwarecomputerInput_1.ProgramCreateOrConnectWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramCreateNestedManyWithoutSoftwarecomputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateManySoftwarecomputerInputEnvelope_1.ProgramCreateManySoftwarecomputerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateManySoftwarecomputerInputEnvelope_1.ProgramCreateManySoftwarecomputerInputEnvelope)
], ProgramCreateNestedManyWithoutSoftwarecomputerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramCreateNestedManyWithoutSoftwarecomputerInput.prototype, "connect", void 0);
ProgramCreateNestedManyWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateNestedManyWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ProgramCreateNestedManyWithoutSoftwarecomputerInput);
exports.ProgramCreateNestedManyWithoutSoftwarecomputerInput = ProgramCreateNestedManyWithoutSoftwarecomputerInput;
