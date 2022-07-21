"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpsertWithWhereUniqueWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateWithoutComputerInput_1 = require("../inputs/ProgramCreateWithoutComputerInput");
const ProgramUpdateWithoutComputerInput_1 = require("../inputs/ProgramUpdateWithoutComputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramUpsertWithWhereUniqueWithoutComputerInput = class ProgramUpsertWithWhereUniqueWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], ProgramUpsertWithWhereUniqueWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateWithoutComputerInput_1.ProgramUpdateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateWithoutComputerInput_1.ProgramUpdateWithoutComputerInput)
], ProgramUpsertWithWhereUniqueWithoutComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateWithoutComputerInput_1.ProgramCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateWithoutComputerInput_1.ProgramCreateWithoutComputerInput)
], ProgramUpsertWithWhereUniqueWithoutComputerInput.prototype, "create", void 0);
ProgramUpsertWithWhereUniqueWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpsertWithWhereUniqueWithoutComputerInput", {
        isAbstract: true
    })
], ProgramUpsertWithWhereUniqueWithoutComputerInput);
exports.ProgramUpsertWithWhereUniqueWithoutComputerInput = ProgramUpsertWithWhereUniqueWithoutComputerInput;
