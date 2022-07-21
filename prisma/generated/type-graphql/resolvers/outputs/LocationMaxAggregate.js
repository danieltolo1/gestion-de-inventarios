"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LocationMaxAggregate = class LocationMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationMaxAggregate.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationMaxAggregate.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationMaxAggregate.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationMaxAggregate.prototype, "job_name", void 0);
LocationMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LocationMaxAggregate", {
        isAbstract: true
    })
], LocationMaxAggregate);
exports.LocationMaxAggregate = LocationMaxAggregate;
