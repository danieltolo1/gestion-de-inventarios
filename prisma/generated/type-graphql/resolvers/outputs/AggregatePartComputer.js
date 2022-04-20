"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePartComputer = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerAvgAggregate_1 = require("../outputs/PartComputerAvgAggregate");
const PartComputerCountAggregate_1 = require("../outputs/PartComputerCountAggregate");
const PartComputerMaxAggregate_1 = require("../outputs/PartComputerMaxAggregate");
const PartComputerMinAggregate_1 = require("../outputs/PartComputerMinAggregate");
const PartComputerSumAggregate_1 = require("../outputs/PartComputerSumAggregate");
let AggregatePartComputer = class AggregatePartComputer {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCountAggregate_1.PartComputerCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCountAggregate_1.PartComputerCountAggregate)
], AggregatePartComputer.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerAvgAggregate_1.PartComputerAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerAvgAggregate_1.PartComputerAvgAggregate)
], AggregatePartComputer.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerSumAggregate_1.PartComputerSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerSumAggregate_1.PartComputerSumAggregate)
], AggregatePartComputer.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerMinAggregate_1.PartComputerMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerMinAggregate_1.PartComputerMinAggregate)
], AggregatePartComputer.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerMaxAggregate_1.PartComputerMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerMaxAggregate_1.PartComputerMaxAggregate)
], AggregatePartComputer.prototype, "_max", void 0);
AggregatePartComputer = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregatePartComputer", {
        isAbstract: true
    })
], AggregatePartComputer);
exports.AggregatePartComputer = AggregatePartComputer;
