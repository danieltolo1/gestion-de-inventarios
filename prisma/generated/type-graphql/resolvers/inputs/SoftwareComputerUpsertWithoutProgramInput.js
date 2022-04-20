"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerUpsertWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateWithoutProgramInput_1 = require("../inputs/SoftwareComputerCreateWithoutProgramInput");
const SoftwareComputerUpdateWithoutProgramInput_1 = require("../inputs/SoftwareComputerUpdateWithoutProgramInput");
let SoftwareComputerUpsertWithoutProgramInput = class SoftwareComputerUpsertWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpdateWithoutProgramInput_1.SoftwareComputerUpdateWithoutProgramInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpdateWithoutProgramInput_1.SoftwareComputerUpdateWithoutProgramInput)
], SoftwareComputerUpsertWithoutProgramInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateWithoutProgramInput_1.SoftwareComputerCreateWithoutProgramInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateWithoutProgramInput_1.SoftwareComputerCreateWithoutProgramInput)
], SoftwareComputerUpsertWithoutProgramInput.prototype, "create", void 0);
SoftwareComputerUpsertWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerUpsertWithoutProgramInput", {
        isAbstract: true
    })
], SoftwareComputerUpsertWithoutProgramInput);
exports.SoftwareComputerUpsertWithoutProgramInput = SoftwareComputerUpsertWithoutProgramInput;
