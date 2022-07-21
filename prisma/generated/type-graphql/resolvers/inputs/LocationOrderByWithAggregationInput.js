"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationAvgOrderByAggregateInput_1 = require("../inputs/LocationAvgOrderByAggregateInput");
const LocationCountOrderByAggregateInput_1 = require("../inputs/LocationCountOrderByAggregateInput");
const LocationMaxOrderByAggregateInput_1 = require("../inputs/LocationMaxOrderByAggregateInput");
const LocationMinOrderByAggregateInput_1 = require("../inputs/LocationMinOrderByAggregateInput");
const LocationSumOrderByAggregateInput_1 = require("../inputs/LocationSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LocationOrderByWithAggregationInput = class LocationOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCountOrderByAggregateInput_1.LocationCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCountOrderByAggregateInput_1.LocationCountOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationAvgOrderByAggregateInput_1.LocationAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationAvgOrderByAggregateInput_1.LocationAvgOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationMaxOrderByAggregateInput_1.LocationMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationMaxOrderByAggregateInput_1.LocationMaxOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationMinOrderByAggregateInput_1.LocationMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationMinOrderByAggregateInput_1.LocationMinOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationSumOrderByAggregateInput_1.LocationSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationSumOrderByAggregateInput_1.LocationSumOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_sum", void 0);
LocationOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationOrderByWithAggregationInput", {
        isAbstract: true
    })
], LocationOrderByWithAggregationInput);
exports.LocationOrderByWithAggregationInput = LocationOrderByWithAggregationInput;
