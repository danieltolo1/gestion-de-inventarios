"use strict";
var PartComputerWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerRelationFilter_1 = require("../inputs/ComputerRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const LocationRelationFilter_1 = require("../inputs/LocationRelationFilter");
const MaintenanceRelationFilter_1 = require("../inputs/MaintenanceRelationFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let PartComputerWhereInput = PartComputerWhereInput_1 = class PartComputerWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerWhereInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductRelationFilter_1.ProductRelationFilter)
], PartComputerWhereInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerWhereInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerRelationFilter_1.ComputerRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerRelationFilter_1.ComputerRelationFilter)
], PartComputerWhereInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerWhereInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationRelationFilter_1.LocationRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationRelationFilter_1.LocationRelationFilter)
], PartComputerWhereInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerWhereInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceRelationFilter_1.MaintenanceRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceRelationFilter_1.MaintenanceRelationFilter)
], PartComputerWhereInput.prototype, "maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerWhereInput.prototype, "maintenanceId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], PartComputerWhereInput.prototype, "name_part", void 0);
PartComputerWhereInput = PartComputerWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerWhereInput", {
        isAbstract: true
    })
], PartComputerWhereInput);
exports.PartComputerWhereInput = PartComputerWhereInput;
