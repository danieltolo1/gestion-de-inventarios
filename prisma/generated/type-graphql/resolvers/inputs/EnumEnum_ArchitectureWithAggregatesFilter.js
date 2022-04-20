"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_ArchitectureWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_ArchitectureFilter_1 = require("../inputs/NestedEnumEnum_ArchitectureFilter");
const NestedEnumEnum_ArchitectureWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_ArchitectureWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Architecture_1 = require("../../enums/Enum_Architecture");
let EnumEnum_ArchitectureWithAggregatesFilter = class EnumEnum_ArchitectureWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_ArchitectureWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Architecture_1.Enum_Architecture], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_ArchitectureWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Architecture_1.Enum_Architecture], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_ArchitectureWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_ArchitectureWithAggregatesFilter_1.NestedEnumEnum_ArchitectureWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_ArchitectureWithAggregatesFilter_1.NestedEnumEnum_ArchitectureWithAggregatesFilter)
], EnumEnum_ArchitectureWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_ArchitectureWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter)
], EnumEnum_ArchitectureWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter)
], EnumEnum_ArchitectureWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_ArchitectureWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_ArchitectureWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_ArchitectureWithAggregatesFilter);
exports.EnumEnum_ArchitectureWithAggregatesFilter = EnumEnum_ArchitectureWithAggregatesFilter;
