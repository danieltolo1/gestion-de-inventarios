"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpsertWithWhereUniqueWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutProgramInput_1 = require("../inputs/ComputerCreateWithoutProgramInput");
const ComputerUpdateWithoutProgramInput_1 = require("../inputs/ComputerUpdateWithoutProgramInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpsertWithWhereUniqueWithoutProgramInput = class ComputerUpsertWithWhereUniqueWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpsertWithWhereUniqueWithoutProgramInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutProgramInput_1.ComputerUpdateWithoutProgramInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutProgramInput_1.ComputerUpdateWithoutProgramInput)
], ComputerUpsertWithWhereUniqueWithoutProgramInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutProgramInput_1.ComputerCreateWithoutProgramInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutProgramInput_1.ComputerCreateWithoutProgramInput)
], ComputerUpsertWithWhereUniqueWithoutProgramInput.prototype, "create", void 0);
ComputerUpsertWithWhereUniqueWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpsertWithWhereUniqueWithoutProgramInput", {
        isAbstract: true
    })
], ComputerUpsertWithWhereUniqueWithoutProgramInput);
exports.ComputerUpsertWithWhereUniqueWithoutProgramInput = ComputerUpsertWithWhereUniqueWithoutProgramInput;
