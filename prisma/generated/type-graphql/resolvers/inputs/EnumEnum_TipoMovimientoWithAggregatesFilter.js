"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_TipoMovimientoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_TipoMovimientoFilter_1 = require("../inputs/NestedEnumEnum_TipoMovimientoFilter");
const NestedEnumEnum_TipoMovimientoWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_TipoMovimientoWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let EnumEnum_TipoMovimientoWithAggregatesFilter = class EnumEnum_TipoMovimientoWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoMovimiento_1.Enum_TipoMovimiento], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoMovimiento_1.Enum_TipoMovimiento], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoMovimientoWithAggregatesFilter_1.NestedEnumEnum_TipoMovimientoWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoMovimientoWithAggregatesFilter_1.NestedEnumEnum_TipoMovimientoWithAggregatesFilter)
], EnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter)
], EnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter)
], EnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_TipoMovimientoWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_TipoMovimientoWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_TipoMovimientoWithAggregatesFilter);
exports.EnumEnum_TipoMovimientoWithAggregatesFilter = EnumEnum_TipoMovimientoWithAggregatesFilter;
