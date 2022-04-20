"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedFloatNullableFilter_1 = require("../inputs/NestedFloatNullableFilter");
let FloatNullableFilter = class FloatNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FloatNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FloatNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], FloatNullableFilter.prototype, "not", void 0);
FloatNullableFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("FloatNullableFilter", {
        isAbstract: true
    })
], FloatNullableFilter);
exports.FloatNullableFilter = FloatNullableFilter;
