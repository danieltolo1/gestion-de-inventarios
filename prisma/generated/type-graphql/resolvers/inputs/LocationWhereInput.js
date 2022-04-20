"use strict";
var LocationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const PartComputerListRelationFilter_1 = require("../inputs/PartComputerListRelationFilter");
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
    TypeGraphQL.Field(_type => PartComputerListRelationFilter_1.PartComputerListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerListRelationFilter_1.PartComputerListRelationFilter)
], LocationWhereInput.prototype, "partComputer", void 0);
LocationWhereInput = LocationWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationWhereInput", {
        isAbstract: true
    })
], LocationWhereInput);
exports.LocationWhereInput = LocationWhereInput;
