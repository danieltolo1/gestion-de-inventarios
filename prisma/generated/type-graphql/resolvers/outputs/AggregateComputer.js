"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateComputer = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerAvgAggregate_1 = require("../outputs/ComputerAvgAggregate");
const ComputerCountAggregate_1 = require("../outputs/ComputerCountAggregate");
const ComputerMaxAggregate_1 = require("../outputs/ComputerMaxAggregate");
const ComputerMinAggregate_1 = require("../outputs/ComputerMinAggregate");
const ComputerSumAggregate_1 = require("../outputs/ComputerSumAggregate");
let AggregateComputer = class AggregateComputer {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCountAggregate_1.ComputerCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCountAggregate_1.ComputerCountAggregate)
], AggregateComputer.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerAvgAggregate_1.ComputerAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerAvgAggregate_1.ComputerAvgAggregate)
], AggregateComputer.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerSumAggregate_1.ComputerSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerSumAggregate_1.ComputerSumAggregate)
], AggregateComputer.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerMinAggregate_1.ComputerMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerMinAggregate_1.ComputerMinAggregate)
], AggregateComputer.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerMaxAggregate_1.ComputerMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerMaxAggregate_1.ComputerMaxAggregate)
], AggregateComputer.prototype, "_max", void 0);
AggregateComputer = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateComputer", {
        isAbstract: true
    })
], AggregateComputer);
exports.AggregateComputer = AggregateComputer;
