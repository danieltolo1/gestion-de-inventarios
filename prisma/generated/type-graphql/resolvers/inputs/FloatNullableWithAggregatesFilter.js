"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedFloatNullableFilter_1 = require("../inputs/NestedFloatNullableFilter");
const NestedFloatNullableWithAggregatesFilter_1 = require("../inputs/NestedFloatNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let FloatNullableWithAggregatesFilter = class FloatNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FloatNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FloatNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableWithAggregatesFilter_1.NestedFloatNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableWithAggregatesFilter_1.NestedFloatNullableWithAggregatesFilter)
], FloatNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_max", void 0);
FloatNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("FloatNullableWithAggregatesFilter", {
        isAbstract: true
    })
], FloatNullableWithAggregatesFilter);
exports.FloatNullableWithAggregatesFilter = FloatNullableWithAggregatesFilter;
