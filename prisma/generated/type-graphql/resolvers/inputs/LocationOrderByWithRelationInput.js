"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerOrderByRelationAggregateInput_1 = require("../inputs/PartComputerOrderByRelationAggregateInput");
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
], LocationOrderByWithRelationInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerOrderByRelationAggregateInput_1.PartComputerOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerOrderByRelationAggregateInput_1.PartComputerOrderByRelationAggregateInput)
], LocationOrderByWithRelationInput.prototype, "partComputer", void 0);
LocationOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationOrderByWithRelationInput", {
        isAbstract: true
    })
], LocationOrderByWithRelationInput);
exports.LocationOrderByWithRelationInput = LocationOrderByWithRelationInput;
