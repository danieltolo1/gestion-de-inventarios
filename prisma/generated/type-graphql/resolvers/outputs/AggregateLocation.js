"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLocation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationAvgAggregate_1 = require("../outputs/LocationAvgAggregate");
const LocationCountAggregate_1 = require("../outputs/LocationCountAggregate");
const LocationMaxAggregate_1 = require("../outputs/LocationMaxAggregate");
const LocationMinAggregate_1 = require("../outputs/LocationMinAggregate");
const LocationSumAggregate_1 = require("../outputs/LocationSumAggregate");
let AggregateLocation = class AggregateLocation {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCountAggregate_1.LocationCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCountAggregate_1.LocationCountAggregate)
], AggregateLocation.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationAvgAggregate_1.LocationAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationAvgAggregate_1.LocationAvgAggregate)
], AggregateLocation.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationSumAggregate_1.LocationSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationSumAggregate_1.LocationSumAggregate)
], AggregateLocation.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationMinAggregate_1.LocationMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationMinAggregate_1.LocationMinAggregate)
], AggregateLocation.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationMaxAggregate_1.LocationMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationMaxAggregate_1.LocationMaxAggregate)
], AggregateLocation.prototype, "_max", void 0);
AggregateLocation = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateLocation", {
        isAbstract: true
    })
], AggregateLocation);
exports.AggregateLocation = AggregateLocation;
