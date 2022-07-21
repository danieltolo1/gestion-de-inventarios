"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProgramCountOrderByAggregateInput = class ProgramCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCountOrderByAggregateInput.prototype, "id_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCountOrderByAggregateInput.prototype, "name_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCountOrderByAggregateInput.prototype, "version_program", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProgramCountOrderByAggregateInput.prototype, "license_program", void 0);
ProgramCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCountOrderByAggregateInput", {
        isAbstract: true
    })
], ProgramCountOrderByAggregateInput);
exports.ProgramCountOrderByAggregateInput = ProgramCountOrderByAggregateInput;
