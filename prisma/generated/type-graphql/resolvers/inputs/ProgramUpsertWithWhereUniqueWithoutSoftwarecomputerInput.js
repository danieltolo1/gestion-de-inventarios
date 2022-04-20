"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramCreateWithoutSoftwarecomputerInput");
const ProgramUpdateWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramUpdateWithoutSoftwarecomputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput = class ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateWithoutSoftwarecomputerInput_1.ProgramUpdateWithoutSoftwarecomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateWithoutSoftwarecomputerInput_1.ProgramUpdateWithoutSoftwarecomputerInput)
], ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateWithoutSoftwarecomputerInput_1.ProgramCreateWithoutSoftwarecomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateWithoutSoftwarecomputerInput_1.ProgramCreateWithoutSoftwarecomputerInput)
], ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "create", void 0);
ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput);
exports.ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput = ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput;
