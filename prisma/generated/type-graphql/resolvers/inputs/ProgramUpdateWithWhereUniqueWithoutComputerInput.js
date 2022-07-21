"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpdateWithWhereUniqueWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramUpdateWithoutComputerInput_1 = require("../inputs/ProgramUpdateWithoutComputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramUpdateWithWhereUniqueWithoutComputerInput = class ProgramUpdateWithWhereUniqueWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereUniqueInput_1.ProgramWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereUniqueInput_1.ProgramWhereUniqueInput)
], ProgramUpdateWithWhereUniqueWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateWithoutComputerInput_1.ProgramUpdateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateWithoutComputerInput_1.ProgramUpdateWithoutComputerInput)
], ProgramUpdateWithWhereUniqueWithoutComputerInput.prototype, "data", void 0);
ProgramUpdateWithWhereUniqueWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpdateWithWhereUniqueWithoutComputerInput", {
        isAbstract: true
    })
], ProgramUpdateWithWhereUniqueWithoutComputerInput);
exports.ProgramUpdateWithWhereUniqueWithoutComputerInput = ProgramUpdateWithWhereUniqueWithoutComputerInput;
