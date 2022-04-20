"use strict";
var ComputerScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolNullableWithAggregatesFilter_1 = require("../inputs/BoolNullableWithAggregatesFilter");
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const FloatNullableWithAggregatesFilter_1 = require("../inputs/FloatNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let ComputerScalarWhereWithAggregatesInput = ComputerScalarWhereWithAggregatesInput_1 = class ComputerScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "id_computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "buy_date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter_1.FloatNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatNullableWithAggregatesFilter_1.FloatNullableWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "memory", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "hard_disk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "processor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "optical_unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "softwarecomputerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], ComputerScalarWhereWithAggregatesInput.prototype, "historial", void 0);
ComputerScalarWhereWithAggregatesInput = ComputerScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], ComputerScalarWhereWithAggregatesInput);
exports.ComputerScalarWhereWithAggregatesInput = ComputerScalarWhereWithAggregatesInput;
