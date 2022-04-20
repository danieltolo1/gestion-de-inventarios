"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProgramOrderByRelationAggregateInput = class ProgramOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByRelationAggregateInput.prototype, "_count", void 0);
ProgramOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ProgramOrderByRelationAggregateInput);
exports.ProgramOrderByRelationAggregateInput = ProgramOrderByRelationAggregateInput;
