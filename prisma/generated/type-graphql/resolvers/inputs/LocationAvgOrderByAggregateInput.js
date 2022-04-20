"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LocationAvgOrderByAggregateInput = class LocationAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationAvgOrderByAggregateInput.prototype, "id_location", void 0);
LocationAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationAvgOrderByAggregateInput", {
        isAbstract: true
    })
], LocationAvgOrderByAggregateInput);
exports.LocationAvgOrderByAggregateInput = LocationAvgOrderByAggregateInput;
