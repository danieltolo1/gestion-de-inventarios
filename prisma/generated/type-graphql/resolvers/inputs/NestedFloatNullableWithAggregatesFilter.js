"use strict";
var NestedFloatNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedFloatNullableFilter_1 = require("../inputs/NestedFloatNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let NestedFloatNullableWithAggregatesFilter = NestedFloatNullableWithAggregatesFilter_1 = class NestedFloatNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedFloatNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedFloatNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableWithAggregatesFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedFloatNullableWithAggregatesFilter = NestedFloatNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedFloatNullableWithAggregatesFilter", {
        isAbstract: true
    })
], NestedFloatNullableWithAggregatesFilter);
exports.NestedFloatNullableWithAggregatesFilter = NestedFloatNullableWithAggregatesFilter;
