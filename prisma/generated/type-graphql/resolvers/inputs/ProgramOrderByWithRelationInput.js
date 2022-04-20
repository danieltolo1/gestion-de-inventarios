"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerOrderByWithRelationInput_1 = require("../inputs/SoftwareComputerOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProgramOrderByWithRelationInput = class ProgramOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByWithRelationInput.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByWithRelationInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByWithRelationInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByWithRelationInput.prototype, "license_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerOrderByWithRelationInput_1.SoftwareComputerOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerOrderByWithRelationInput_1.SoftwareComputerOrderByWithRelationInput)
], ProgramOrderByWithRelationInput.prototype, "softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByWithRelationInput.prototype, "softwarecomputerId", void 0);
ProgramOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramOrderByWithRelationInput", {
        isAbstract: true
    })
], ProgramOrderByWithRelationInput);
exports.ProgramOrderByWithRelationInput = ProgramOrderByWithRelationInput;
