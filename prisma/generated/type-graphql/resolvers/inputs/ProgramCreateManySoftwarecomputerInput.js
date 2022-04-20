"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateManySoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramCreateManySoftwarecomputerInput = class ProgramCreateManySoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramCreateManySoftwarecomputerInput.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateManySoftwarecomputerInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateManySoftwarecomputerInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCreateManySoftwarecomputerInput.prototype, "license_program", void 0);
ProgramCreateManySoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateManySoftwarecomputerInput", {
        isAbstract: true
    })
], ProgramCreateManySoftwarecomputerInput);
exports.ProgramCreateManySoftwarecomputerInput = ProgramCreateManySoftwarecomputerInput;
