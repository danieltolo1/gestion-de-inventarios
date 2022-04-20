"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProgramArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramOrderByWithAggregationInput_1 = require("../../../inputs/ProgramOrderByWithAggregationInput");
const ProgramScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProgramScalarWhereWithAggregatesInput");
const ProgramWhereInput_1 = require("../../../inputs/ProgramWhereInput");
const ProgramScalarFieldEnum_1 = require("../../../../enums/ProgramScalarFieldEnum");
let GroupByProgramArgs = class GroupByProgramArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramWhereInput_1.ProgramWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramWhereInput_1.ProgramWhereInput)
], GroupByProgramArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramOrderByWithAggregationInput_1.ProgramOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByProgramArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramScalarFieldEnum_1.ProgramScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByProgramArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramScalarWhereWithAggregatesInput_1.ProgramScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramScalarWhereWithAggregatesInput_1.ProgramScalarWhereWithAggregatesInput)
], GroupByProgramArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByProgramArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByProgramArgs.prototype, "skip", void 0);
GroupByProgramArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByProgramArgs);
exports.GroupByProgramArgs = GroupByProgramArgs;
