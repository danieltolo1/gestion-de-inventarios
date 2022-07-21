"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCount_1 = require("../resolvers/outputs/LocationCount");
let Location = class Location {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Location.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Location.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Location.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Location.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCount_1.LocationCount, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCount_1.LocationCount)
], Location.prototype, "_count", void 0);
Location = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Location", {
        isAbstract: true
    })
], Location);
exports.Location = Location;
