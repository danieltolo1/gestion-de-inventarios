"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramCreateWithoutComputerInput = class ProgramCreateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateWithoutComputerInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateWithoutComputerInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateWithoutComputerInput.prototype, "license_program", void 0);
ProgramCreateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateWithoutComputerInput", {
        isAbstract: true
    })
], ProgramCreateWithoutComputerInput);
exports.ProgramCreateWithoutComputerInput = ProgramCreateWithoutComputerInput;
