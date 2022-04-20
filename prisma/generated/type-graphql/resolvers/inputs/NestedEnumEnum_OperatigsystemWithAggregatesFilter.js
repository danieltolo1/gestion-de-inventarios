"use strict";
var NestedEnumEnum_OperatigsystemWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_OperatigsystemWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_OperatigsystemFilter_1 = require("../inputs/NestedEnumEnum_OperatigsystemFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Operatigsystem_1 = require("../../enums/Enum_Operatigsystem");
let NestedEnumEnum_OperatigsystemWithAggregatesFilter = NestedEnumEnum_OperatigsystemWithAggregatesFilter_1 = class NestedEnumEnum_OperatigsystemWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_OperatigsystemWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Operatigsystem_1.Enum_Operatigsystem], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_OperatigsystemWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_Operatigsystem_1.Enum_Operatigsystem], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_OperatigsystemWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_OperatigsystemWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_OperatigsystemWithAggregatesFilter)
], NestedEnumEnum_OperatigsystemWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_OperatigsystemWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter)
], NestedEnumEnum_OperatigsystemWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_OperatigsystemFilter_1.NestedEnumEnum_OperatigsystemFilter)
], NestedEnumEnum_OperatigsystemWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_OperatigsystemWithAggregatesFilter = NestedEnumEnum_OperatigsystemWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_OperatigsystemWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_OperatigsystemWithAggregatesFilter);
exports.NestedEnumEnum_OperatigsystemWithAggregatesFilter = NestedEnumEnum_OperatigsystemWithAggregatesFilter;
