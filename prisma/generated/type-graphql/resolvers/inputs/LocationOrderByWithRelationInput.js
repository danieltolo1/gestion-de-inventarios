"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerOrderByRelationAggregateInput_1 = require("../inputs/ComputerOrderByRelationAggregateInput");
const ProductOrderByRelationAggregateInput_1 = require("../inputs/ProductOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LocationOrderByWithRelationInput = class LocationOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationInput.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerOrderByRelationAggregateInput_1.ComputerOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerOrderByRelationAggregateInput_1.ComputerOrderByRelationAggregateInput)
], LocationOrderByWithRelationInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput)
], LocationOrderByWithRelationInput.prototype, "porduct", void 0);
LocationOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationOrderByWithRelationInput", {
        isAbstract: true
    })
], LocationOrderByWithRelationInput);
exports.LocationOrderByWithRelationInput = LocationOrderByWithRelationInput;
