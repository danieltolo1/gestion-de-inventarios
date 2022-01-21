"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioAvgAggregate_1 = require("../outputs/InventarioAvgAggregate");
const InventarioCountAggregate_1 = require("../outputs/InventarioCountAggregate");
const InventarioMaxAggregate_1 = require("../outputs/InventarioMaxAggregate");
const InventarioMinAggregate_1 = require("../outputs/InventarioMinAggregate");
const InventarioSumAggregate_1 = require("../outputs/InventarioSumAggregate");
let InventarioGroupBy = class InventarioGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioGroupBy.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioGroupBy.prototype, "productoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCountAggregate_1.InventarioCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCountAggregate_1.InventarioCountAggregate)
], InventarioGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioAvgAggregate_1.InventarioAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioAvgAggregate_1.InventarioAvgAggregate)
], InventarioGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioSumAggregate_1.InventarioSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioSumAggregate_1.InventarioSumAggregate)
], InventarioGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioMinAggregate_1.InventarioMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioMinAggregate_1.InventarioMinAggregate)
], InventarioGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioMaxAggregate_1.InventarioMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioMaxAggregate_1.InventarioMaxAggregate)
], InventarioGroupBy.prototype, "_max", void 0);
InventarioGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("InventarioGroupBy", {
        isAbstract: true
    })
], InventarioGroupBy);
exports.InventarioGroupBy = InventarioGroupBy;
