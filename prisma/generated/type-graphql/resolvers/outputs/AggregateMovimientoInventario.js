"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMovimientoInventario = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioAvgAggregate_1 = require("../outputs/MovimientoInventarioAvgAggregate");
const MovimientoInventarioCountAggregate_1 = require("../outputs/MovimientoInventarioCountAggregate");
const MovimientoInventarioMaxAggregate_1 = require("../outputs/MovimientoInventarioMaxAggregate");
const MovimientoInventarioMinAggregate_1 = require("../outputs/MovimientoInventarioMinAggregate");
const MovimientoInventarioSumAggregate_1 = require("../outputs/MovimientoInventarioSumAggregate");
let AggregateMovimientoInventario = class AggregateMovimientoInventario {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCountAggregate_1.MovimientoInventarioCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCountAggregate_1.MovimientoInventarioCountAggregate)
], AggregateMovimientoInventario.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioAvgAggregate_1.MovimientoInventarioAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioAvgAggregate_1.MovimientoInventarioAvgAggregate)
], AggregateMovimientoInventario.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioSumAggregate_1.MovimientoInventarioSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioSumAggregate_1.MovimientoInventarioSumAggregate)
], AggregateMovimientoInventario.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioMinAggregate_1.MovimientoInventarioMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioMinAggregate_1.MovimientoInventarioMinAggregate)
], AggregateMovimientoInventario.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioMaxAggregate_1.MovimientoInventarioMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioMaxAggregate_1.MovimientoInventarioMaxAggregate)
], AggregateMovimientoInventario.prototype, "_max", void 0);
AggregateMovimientoInventario = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateMovimientoInventario", {
        isAbstract: true
    })
], AggregateMovimientoInventario);
exports.AggregateMovimientoInventario = AggregateMovimientoInventario;
