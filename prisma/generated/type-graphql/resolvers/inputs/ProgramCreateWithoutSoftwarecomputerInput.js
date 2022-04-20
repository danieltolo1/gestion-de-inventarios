"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramCreateWithoutSoftwarecomputerInput = class ProgramCreateWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateWithoutSoftwarecomputerInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateWithoutSoftwarecomputerInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateWithoutSoftwarecomputerInput.prototype, "license_program", void 0);
ProgramCreateWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ProgramCreateWithoutSoftwarecomputerInput);
exports.ProgramCreateWithoutSoftwarecomputerInput = ProgramCreateWithoutSoftwarecomputerInput;
