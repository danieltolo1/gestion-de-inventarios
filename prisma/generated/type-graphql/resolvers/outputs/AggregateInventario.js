"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInventario = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioAvgAggregate_1 = require("../outputs/InventarioAvgAggregate");
const InventarioCountAggregate_1 = require("../outputs/InventarioCountAggregate");
const InventarioMaxAggregate_1 = require("../outputs/InventarioMaxAggregate");
const InventarioMinAggregate_1 = require("../outputs/InventarioMinAggregate");
const InventarioSumAggregate_1 = require("../outputs/InventarioSumAggregate");
let AggregateInventario = class AggregateInventario {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCountAggregate_1.InventarioCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCountAggregate_1.InventarioCountAggregate)
], AggregateInventario.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioAvgAggregate_1.InventarioAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioAvgAggregate_1.InventarioAvgAggregate)
], AggregateInventario.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioSumAggregate_1.InventarioSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioSumAggregate_1.InventarioSumAggregate)
], AggregateInventario.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioMinAggregate_1.InventarioMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioMinAggregate_1.InventarioMinAggregate)
], AggregateInventario.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioMaxAggregate_1.InventarioMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioMaxAggregate_1.InventarioMaxAggregate)
], AggregateInventario.prototype, "_max", void 0);
AggregateInventario = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateInventario", {
        isAbstract: true
    })
], AggregateInventario);
exports.AggregateInventario = AggregateInventario;
