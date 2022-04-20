"use strict";
var NestedEnumEnum_ArchitectureWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_ArchitectureWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_ArchitectureFilter_1 = require("../inputs/NestedEnumEnum_ArchitectureFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Architecture_1 = require("../../enums/Enum_Architecture");
let NestedEnumEnum_ArchitectureWithAggregatesFilter = NestedEnumEnum_ArchitectureWithAggregatesFilter_1 = class NestedEnumEnum_ArchitectureWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_ArchitectureWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Architecture_1.Enum_Architecture], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_ArchitectureWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Architecture_1.Enum_Architecture], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_ArchitectureWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_ArchitectureWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_ArchitectureWithAggregatesFilter)
], NestedEnumEnum_ArchitectureWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_ArchitectureWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter)
], NestedEnumEnum_ArchitectureWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_ArchitectureFilter_1.NestedEnumEnum_ArchitectureFilter)
], NestedEnumEnum_ArchitectureWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_ArchitectureWithAggregatesFilter = NestedEnumEnum_ArchitectureWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_ArchitectureWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_ArchitectureWithAggregatesFilter);
exports.NestedEnumEnum_ArchitectureWithAggregatesFilter = NestedEnumEnum_ArchitectureWithAggregatesFilter;
