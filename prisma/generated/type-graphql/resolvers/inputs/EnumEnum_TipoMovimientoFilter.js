"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_TipoMovimientoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_TipoMovimientoFilter_1 = require("../inputs/NestedEnumEnum_TipoMovimientoFilter");
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let EnumEnum_TipoMovimientoFilter = class EnumEnum_TipoMovimientoFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_TipoMovimientoFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoMovimiento_1.Enum_TipoMovimiento], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_TipoMovimientoFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoMovimiento_1.Enum_TipoMovimiento], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_TipoMovimientoFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoMovimientoFilter_1.NestedEnumEnum_TipoMovimientoFilter)
], EnumEnum_TipoMovimientoFilter.prototype, "not", void 0);
EnumEnum_TipoMovimientoFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_TipoMovimientoFilter", {
        isAbstract: true
    })
], EnumEnum_TipoMovimientoFilter);
exports.EnumEnum_TipoMovimientoFilter = EnumEnum_TipoMovimientoFilter;
