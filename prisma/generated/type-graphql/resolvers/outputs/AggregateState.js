"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateState = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateAvgAggregate_1 = require("../outputs/StateAvgAggregate");
const StateCountAggregate_1 = require("../outputs/StateCountAggregate");
const StateMaxAggregate_1 = require("../outputs/StateMaxAggregate");
const StateMinAggregate_1 = require("../outputs/StateMinAggregate");
const StateSumAggregate_1 = require("../outputs/StateSumAggregate");
let AggregateState = class AggregateState {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCountAggregate_1.StateCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCountAggregate_1.StateCountAggregate)
], AggregateState.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateAvgAggregate_1.StateAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateAvgAggregate_1.StateAvgAggregate)
], AggregateState.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateSumAggregate_1.StateSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateSumAggregate_1.StateSumAggregate)
], AggregateState.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateMinAggregate_1.StateMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateMinAggregate_1.StateMinAggregate)
], AggregateState.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateMaxAggregate_1.StateMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateMaxAggregate_1.StateMaxAggregate)
], AggregateState.prototype, "_max", void 0);
AggregateState = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateState", {
        isAbstract: true
    })
], AggregateState);
exports.AggregateState = AggregateState;
