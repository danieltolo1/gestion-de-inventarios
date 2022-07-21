"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedManyWithoutProgramInput_1 = require("../inputs/ComputerCreateNestedManyWithoutProgramInput");
let ProgramCreateInput = class ProgramCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateInput.prototype, "license_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedManyWithoutProgramInput_1.ComputerCreateNestedManyWithoutProgramInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedManyWithoutProgramInput_1.ComputerCreateNestedManyWithoutProgramInput)
], ProgramCreateInput.prototype, "computer", void 0);
ProgramCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateInput", {
        isAbstract: true
    })
], ProgramCreateInput);
exports.ProgramCreateInput = ProgramCreateInput;
