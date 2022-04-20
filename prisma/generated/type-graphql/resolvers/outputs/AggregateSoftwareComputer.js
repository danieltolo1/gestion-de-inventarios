"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSoftwareComputer = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerAvgAggregate_1 = require("../outputs/SoftwareComputerAvgAggregate");
const SoftwareComputerCountAggregate_1 = require("../outputs/SoftwareComputerCountAggregate");
const SoftwareComputerMaxAggregate_1 = require("../outputs/SoftwareComputerMaxAggregate");
const SoftwareComputerMinAggregate_1 = require("../outputs/SoftwareComputerMinAggregate");
const SoftwareComputerSumAggregate_1 = require("../outputs/SoftwareComputerSumAggregate");
let AggregateSoftwareComputer = class AggregateSoftwareComputer {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCountAggregate_1.SoftwareComputerCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCountAggregate_1.SoftwareComputerCountAggregate)
], AggregateSoftwareComputer.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerAvgAggregate_1.SoftwareComputerAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerAvgAggregate_1.SoftwareComputerAvgAggregate)
], AggregateSoftwareComputer.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerSumAggregate_1.SoftwareComputerSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerSumAggregate_1.SoftwareComputerSumAggregate)
], AggregateSoftwareComputer.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerMinAggregate_1.SoftwareComputerMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerMinAggregate_1.SoftwareComputerMinAggregate)
], AggregateSoftwareComputer.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerMaxAggregate_1.SoftwareComputerMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerMaxAggregate_1.SoftwareComputerMaxAggregate)
], AggregateSoftwareComputer.prototype, "_max", void 0);
AggregateSoftwareComputer = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateSoftwareComputer", {
        isAbstract: true
    })
], AggregateSoftwareComputer);
exports.AggregateSoftwareComputer = AggregateSoftwareComputer;
