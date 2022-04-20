"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LocationMaxOrderByAggregateInput = class LocationMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationMaxOrderByAggregateInput.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationMaxOrderByAggregateInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationMaxOrderByAggregateInput.prototype, "job_name", void 0);
LocationMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationMaxOrderByAggregateInput", {
        isAbstract: true
    })
], LocationMaxOrderByAggregateInput);
exports.LocationMaxOrderByAggregateInput = LocationMaxOrderByAggregateInput;
