"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerAvgOrderByAggregateInput_1 = require("../inputs/SoftwareComputerAvgOrderByAggregateInput");
const SoftwareComputerCountOrderByAggregateInput_1 = require("../inputs/SoftwareComputerCountOrderByAggregateInput");
const SoftwareComputerMaxOrderByAggregateInput_1 = require("../inputs/SoftwareComputerMaxOrderByAggregateInput");
const SoftwareComputerMinOrderByAggregateInput_1 = require("../inputs/SoftwareComputerMinOrderByAggregateInput");
const SoftwareComputerSumOrderByAggregateInput_1 = require("../inputs/SoftwareComputerSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SoftwareComputerOrderByWithAggregationInput = class SoftwareComputerOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerOrderByWithAggregationInput.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerOrderByWithAggregationInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerOrderByWithAggregationInput.prototype, "license_soA", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerOrderByWithAggregationInput.prototype, "architecture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCountOrderByAggregateInput_1.SoftwareComputerCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCountOrderByAggregateInput_1.SoftwareComputerCountOrderByAggregateInput)
], SoftwareComputerOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerAvgOrderByAggregateInput_1.SoftwareComputerAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerAvgOrderByAggregateInput_1.SoftwareComputerAvgOrderByAggregateInput)
], SoftwareComputerOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerMaxOrderByAggregateInput_1.SoftwareComputerMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerMaxOrderByAggregateInput_1.SoftwareComputerMaxOrderByAggregateInput)
], SoftwareComputerOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerMinOrderByAggregateInput_1.SoftwareComputerMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerMinOrderByAggregateInput_1.SoftwareComputerMinOrderByAggregateInput)
], SoftwareComputerOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerSumOrderByAggregateInput_1.SoftwareComputerSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerSumOrderByAggregateInput_1.SoftwareComputerSumOrderByAggregateInput)
], SoftwareComputerOrderByWithAggregationInput.prototype, "_sum", void 0);
SoftwareComputerOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerOrderByWithAggregationInput", {
        isAbstract: true
    })
], SoftwareComputerOrderByWithAggregationInput);
exports.SoftwareComputerOrderByWithAggregationInput = SoftwareComputerOrderByWithAggregationInput;
