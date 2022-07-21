"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LocationCountOrderByAggregateInput = class LocationCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCountOrderByAggregateInput.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCountOrderByAggregateInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCountOrderByAggregateInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCountOrderByAggregateInput.prototype, "job_name", void 0);
LocationCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCountOrderByAggregateInput", {
        isAbstract: true
    })
], LocationCountOrderByAggregateInput);
exports.LocationCountOrderByAggregateInput = LocationCountOrderByAggregateInput;
