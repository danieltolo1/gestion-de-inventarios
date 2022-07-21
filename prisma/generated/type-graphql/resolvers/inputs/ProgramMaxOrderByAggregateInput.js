"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProgramMaxOrderByAggregateInput = class ProgramMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMaxOrderByAggregateInput.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMaxOrderByAggregateInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMaxOrderByAggregateInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramMaxOrderByAggregateInput.prototype, "license_program", void 0);
ProgramMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ProgramMaxOrderByAggregateInput);
exports.ProgramMaxOrderByAggregateInput = ProgramMaxOrderByAggregateInput;
