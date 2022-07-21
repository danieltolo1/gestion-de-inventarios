"use strict";
var LocationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerListRelationFilter_1 = require("../inputs/ComputerListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let LocationWhereInput = LocationWhereInput_1 = class LocationWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LocationWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LocationWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LocationWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], LocationWhereInput.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], LocationWhereInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], LocationWhereInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], LocationWhereInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerListRelationFilter_1.ComputerListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerListRelationFilter_1.ComputerListRelationFilter)
], LocationWhereInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], LocationWhereInput.prototype, "porduct", void 0);
LocationWhereInput = LocationWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationWhereInput", {
        isAbstract: true
    })
], LocationWhereInput);
exports.LocationWhereInput = LocationWhereInput;
