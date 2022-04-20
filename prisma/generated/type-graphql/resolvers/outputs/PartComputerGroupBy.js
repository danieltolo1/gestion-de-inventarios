"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerAvgAggregate_1 = require("../outputs/PartComputerAvgAggregate");
const PartComputerCountAggregate_1 = require("../outputs/PartComputerCountAggregate");
const PartComputerMaxAggregate_1 = require("../outputs/PartComputerMaxAggregate");
const PartComputerMinAggregate_1 = require("../outputs/PartComputerMinAggregate");
const PartComputerSumAggregate_1 = require("../outputs/PartComputerSumAggregate");
let PartComputerGroupBy = class PartComputerGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerGroupBy.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerGroupBy.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerGroupBy.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerGroupBy.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerGroupBy.prototype, "maintenanceId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerGroupBy.prototype, "name_part", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCountAggregate_1.PartComputerCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCountAggregate_1.PartComputerCountAggregate)
], PartComputerGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerAvgAggregate_1.PartComputerAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerAvgAggregate_1.PartComputerAvgAggregate)
], PartComputerGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerSumAggregate_1.PartComputerSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerSumAggregate_1.PartComputerSumAggregate)
], PartComputerGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerMinAggregate_1.PartComputerMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerMinAggregate_1.PartComputerMinAggregate)
], PartComputerGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerMaxAggregate_1.PartComputerMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerMaxAggregate_1.PartComputerMaxAggregate)
], PartComputerGroupBy.prototype, "_max", void 0);
PartComputerGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PartComputerGroupBy", {
        isAbstract: true
    })
], PartComputerGroupBy);
exports.PartComputerGroupBy = PartComputerGroupBy;
