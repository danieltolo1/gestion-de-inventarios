"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramAvgOrderByAggregateInput_1 = require("../inputs/ProgramAvgOrderByAggregateInput");
const ProgramCountOrderByAggregateInput_1 = require("../inputs/ProgramCountOrderByAggregateInput");
const ProgramMaxOrderByAggregateInput_1 = require("../inputs/ProgramMaxOrderByAggregateInput");
const ProgramMinOrderByAggregateInput_1 = require("../inputs/ProgramMinOrderByAggregateInput");
const ProgramSumOrderByAggregateInput_1 = require("../inputs/ProgramSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProgramOrderByWithAggregationInput = class ProgramOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByWithAggregationInput.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByWithAggregationInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByWithAggregationInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramOrderByWithAggregationInput.prototype, "license_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCountOrderByAggregateInput_1.ProgramCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCountOrderByAggregateInput_1.ProgramCountOrderByAggregateInput)
], ProgramOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramAvgOrderByAggregateInput_1.ProgramAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramAvgOrderByAggregateInput_1.ProgramAvgOrderByAggregateInput)
], ProgramOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramMaxOrderByAggregateInput_1.ProgramMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramMaxOrderByAggregateInput_1.ProgramMaxOrderByAggregateInput)
], ProgramOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramMinOrderByAggregateInput_1.ProgramMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramMinOrderByAggregateInput_1.ProgramMinOrderByAggregateInput)
], ProgramOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramSumOrderByAggregateInput_1.ProgramSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramSumOrderByAggregateInput_1.ProgramSumOrderByAggregateInput)
], ProgramOrderByWithAggregationInput.prototype, "_sum", void 0);
ProgramOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramOrderByWithAggregationInput", {
        isAbstract: true
    })
], ProgramOrderByWithAggregationInput);
exports.ProgramOrderByWithAggregationInput = ProgramOrderByWithAggregationInput;
