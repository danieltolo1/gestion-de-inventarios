"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_OperatigsystemWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_OperatigsystemFilter_1 = require("../inputs/NestedEnumEnum_OperatigsystemFilter");
const NestedEnumEnum_OperatigsystemWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_OperatigsystemWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Operatigsystem_1 = require("../../enums/Enum_Operatigsystem");
let EnumEnum_OperatigsystemWithAggregatesFilter = class EnumEnum_OperatigsystemWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_OperatigsystemWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Operatigsystem_1.Enum_Operatigsystem], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_OperatigsystemWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Operatigsystem_1.Enum_Operatigsystem], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_OperatigsystemWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_OperatigsystemWithAggregatesFilter_1.NestedEnumEnum_OperatigsystemWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_OperatigsystemWithAggregatesFilter_1.NestedEnumEnum_OperatigsystemWithAggregatesFilter)
], EnumEnum_OperatigsystemWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_OperatigsystemWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter)
], EnumEnum_OperatigsystemWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter)
], EnumEnum_OperatigsystemWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_OperatigsystemWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_OperatigsystemWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_OperatigsystemWithAggregatesFilter);
exports.EnumEnum_OperatigsystemWithAggregatesFilter = EnumEnum_OperatigsystemWithAggregatesFilter;
