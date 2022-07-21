"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LocationSumAggregate = class LocationSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationSumAggregate.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationSumAggregate.prototype, "internal_code", void 0);
LocationSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LocationSumAggregate", {
        isAbstract: true
    })
], LocationSumAggregate);
exports.LocationSumAggregate = LocationSumAggregate;
