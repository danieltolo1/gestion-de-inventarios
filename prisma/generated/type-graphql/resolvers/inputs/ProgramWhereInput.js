"use strict";
var ProgramWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const SoftwareComputerRelationFilter_1 = require("../inputs/SoftwareComputerRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ProgramWhereInput = ProgramWhereInput_1 = class ProgramWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], ProgramWhereInput.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProgramWhereInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], ProgramWhereInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], ProgramWhereInput.prototype, "license_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerRelationFilter_1.SoftwareComputerRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerRelationFilter_1.SoftwareComputerRelationFilter)
], ProgramWhereInput.prototype, "softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], ProgramWhereInput.prototype, "softwarecomputerId", void 0);
ProgramWhereInput = ProgramWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramWhereInput", {
        isAbstract: true
    })
], ProgramWhereInput);
exports.ProgramWhereInput = ProgramWhereInput;
