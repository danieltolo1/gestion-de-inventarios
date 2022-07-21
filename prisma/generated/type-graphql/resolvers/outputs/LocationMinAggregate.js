"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LocationMinAggregate = class LocationMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationMinAggregate.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationMinAggregate.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationMinAggregate.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationMinAggregate.prototype, "job_name", void 0);
LocationMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LocationMinAggregate", {
        isAbstract: true
    })
], LocationMinAggregate);
exports.LocationMinAggregate = LocationMinAggregate;
