"use strict";
var NestedEnumEnum_TipoMovimientoFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_TipoMovimientoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let NestedEnumEnum_TipoMovimientoFilter = NestedEnumEnum_TipoMovimientoFilter_1 = class NestedEnumEnum_TipoMovimientoFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_TipoMovimientoFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoMovimiento_1.Enum_TipoMovimiento], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_TipoMovimientoFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoMovimiento_1.Enum_TipoMovimiento], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_TipoMovimientoFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoMovimientoFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoMovimientoFilter)
], NestedEnumEnum_TipoMovimientoFilter.prototype, "not", void 0);
NestedEnumEnum_TipoMovimientoFilter = NestedEnumEnum_TipoMovimientoFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_TipoMovimientoFilter", {
        isAbstract: true
    })
], NestedEnumEnum_TipoMovimientoFilter);
exports.NestedEnumEnum_TipoMovimientoFilter = NestedEnumEnum_TipoMovimientoFilter;
