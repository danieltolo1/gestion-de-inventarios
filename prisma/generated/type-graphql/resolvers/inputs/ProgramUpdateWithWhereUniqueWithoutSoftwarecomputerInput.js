"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramUpdateWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramUpdateWithoutSoftwarecomputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput = class ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateWithoutSoftwarecomputerInput_1.ProgramUpdateWithoutSoftwarecomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateWithoutSoftwarecomputerInput_1.ProgramUpdateWithoutSoftwarecomputerInput)
], ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "data", void 0);
ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput);
exports.ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput = ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput;
