"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProgramMinOrderByAggregateInput = class ProgramMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMinOrderByAggregateInput.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMinOrderByAggregateInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMinOrderByAggregateInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMinOrderByAggregateInput.prototype, "license_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMinOrderByAggregateInput.prototype, "softwarecomputerId", void 0);
ProgramMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramMinOrderByAggregateInput", {
        isAbstract: true
    })
], ProgramMinOrderByAggregateInput);
exports.ProgramMinOrderByAggregateInput = ProgramMinOrderByAggregateInput;
