"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LocationAvgAggregate = class LocationAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationAvgAggregate.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationAvgAggregate.prototype, "internal_code", void 0);
LocationAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LocationAvgAggregate", {
        isAbstract: true
    })
], LocationAvgAggregate);
exports.LocationAvgAggregate = LocationAvgAggregate;
