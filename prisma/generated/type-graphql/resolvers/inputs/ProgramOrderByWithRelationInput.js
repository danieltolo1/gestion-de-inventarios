"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerOrderByRelationAggregateInput_1 = require("../inputs/ComputerOrderByRelationAggregateInput");
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
    TypeGraphQL.Field(_type => ComputerOrderByRelationAggregateInput_1.ComputerOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerOrderByRelationAggregateInput_1.ComputerOrderByRelationAggregateInput)
], ProgramOrderByWithRelationInput.prototype, "computer", void 0);
ProgramOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramOrderByWithRelationInput", {
        isAbstract: true
    })
], ProgramOrderByWithRelationInput);
exports.ProgramOrderByWithRelationInput = ProgramOrderByWithRelationInput;
