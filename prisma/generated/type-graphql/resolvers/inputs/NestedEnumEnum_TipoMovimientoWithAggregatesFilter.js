"use strict";
var NestedEnumEnum_TipoMovimientoWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_TipoMovimientoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_TipoMovimientoFilter_1 = require("../inputs/NestedEnumEnum_TipoMovimientoFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let NestedEnumEnum_TipoMovimientoWithAggregatesFilter = NestedEnumEnum_TipoMovimientoWithAggregatesFilter_1 = class NestedEnumEnum_TipoMovimientoWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoMovimiento_1.Enum_TipoMovimiento], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoMovimiento_1.Enum_TipoMovimiento], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoMovimientoWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoMovimientoWithAggregatesFilter)
], NestedEnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter)
], NestedEnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter)
], NestedEnumEnum_TipoMovimientoWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_TipoMovimientoWithAggregatesFilter = NestedEnumEnum_TipoMovimientoWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_TipoMovimientoWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_TipoMovimientoWithAggregatesFilter);
exports.NestedEnumEnum_TipoMovimientoWithAggregatesFilter = NestedEnumEnum_TipoMovimientoWithAggregatesFilter;
