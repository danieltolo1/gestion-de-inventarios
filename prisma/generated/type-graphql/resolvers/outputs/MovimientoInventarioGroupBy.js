"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioAvgAggregate_1 = require("../outputs/MovimientoInventarioAvgAggregate");
const MovimientoInventarioCountAggregate_1 = require("../outputs/MovimientoInventarioCountAggregate");
const MovimientoInventarioMaxAggregate_1 = require("../outputs/MovimientoInventarioMaxAggregate");
const MovimientoInventarioMinAggregate_1 = require("../outputs/MovimientoInventarioMinAggregate");
const MovimientoInventarioSumAggregate_1 = require("../outputs/MovimientoInventarioSumAggregate");
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let MovimientoInventarioGroupBy = class MovimientoInventarioGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioGroupBy.prototype, "inventarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioGroupBy.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioGroupBy.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MovimientoInventarioGroupBy.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioGroupBy.prototype, "usuarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCountAggregate_1.MovimientoInventarioCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCountAggregate_1.MovimientoInventarioCountAggregate)
], MovimientoInventarioGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioAvgAggregate_1.MovimientoInventarioAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioAvgAggregate_1.MovimientoInventarioAvgAggregate)
], MovimientoInventarioGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioSumAggregate_1.MovimientoInventarioSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioSumAggregate_1.MovimientoInventarioSumAggregate)
], MovimientoInventarioGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioMinAggregate_1.MovimientoInventarioMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioMinAggregate_1.MovimientoInventarioMinAggregate)
], MovimientoInventarioGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioMaxAggregate_1.MovimientoInventarioMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioMaxAggregate_1.MovimientoInventarioMaxAggregate)
], MovimientoInventarioGroupBy.prototype, "_max", void 0);
MovimientoInventarioGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MovimientoInventarioGroupBy", {
        isAbstract: true
    })
], MovimientoInventarioGroupBy);
exports.MovimientoInventarioGroupBy = MovimientoInventarioGroupBy;
