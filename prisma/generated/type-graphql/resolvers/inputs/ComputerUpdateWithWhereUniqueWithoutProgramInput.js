"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateWithWhereUniqueWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateWithoutProgramInput_1 = require("../inputs/ComputerUpdateWithoutProgramInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateWithWhereUniqueWithoutProgramInput = class ComputerUpdateWithWhereUniqueWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpdateWithWhereUniqueWithoutProgramInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutProgramInput_1.ComputerUpdateWithoutProgramInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutProgramInput_1.ComputerUpdateWithoutProgramInput)
], ComputerUpdateWithWhereUniqueWithoutProgramInput.prototype, "data", void 0);
ComputerUpdateWithWhereUniqueWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateWithWhereUniqueWithoutProgramInput", {
        isAbstract: true
    })
], ComputerUpdateWithWhereUniqueWithoutProgramInput);
exports.ComputerUpdateWithWhereUniqueWithoutProgramInput = ComputerUpdateWithWhereUniqueWithoutProgramInput;
