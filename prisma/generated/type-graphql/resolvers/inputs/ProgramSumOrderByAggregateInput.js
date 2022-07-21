"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProgramSumOrderByAggregateInput = class ProgramSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramSumOrderByAggregateInput.prototype, "id_program", void 0);
ProgramSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramSumOrderByAggregateInput", {
        isAbstract: true
    })
], ProgramSumOrderByAggregateInput);
exports.ProgramSumOrderByAggregateInput = ProgramSumOrderByAggregateInput;
