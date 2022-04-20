"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LocationCountAggregate = class LocationCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationCountAggregate.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationCountAggregate.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationCountAggregate.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationCountAggregate.prototype, "_all", void 0);
LocationCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LocationCountAggregate", {
        isAbstract: true
    })
], LocationCountAggregate);
exports.LocationCountAggregate = LocationCountAggregate;
