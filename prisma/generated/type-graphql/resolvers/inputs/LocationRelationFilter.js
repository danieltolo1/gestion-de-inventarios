"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationWhereInput_1 = require("../inputs/LocationWhereInput");
let LocationRelationFilter = class LocationRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereInput_1.LocationWhereInput)
], LocationRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereInput_1.LocationWhereInput)
], LocationRelationFilter.prototype, "isNot", void 0);
LocationRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationRelationFilter", {
        isAbstract: true
    })
], LocationRelationFilter);
exports.LocationRelationFilter = LocationRelationFilter;
