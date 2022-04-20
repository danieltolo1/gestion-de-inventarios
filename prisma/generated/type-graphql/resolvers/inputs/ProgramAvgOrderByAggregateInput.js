"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProgramAvgOrderByAggregateInput = class ProgramAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramAvgOrderByAggregateInput.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramAvgOrderByAggregateInput.prototype, "softwarecomputerId", void 0);
ProgramAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ProgramAvgOrderByAggregateInput);
exports.ProgramAvgOrderByAggregateInput = ProgramAvgOrderByAggregateInput;
