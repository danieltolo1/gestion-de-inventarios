"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerAvgOrderByAggregateInput_1 = require("../inputs/PartComputerAvgOrderByAggregateInput");
const PartComputerCountOrderByAggregateInput_1 = require("../inputs/PartComputerCountOrderByAggregateInput");
const PartComputerMaxOrderByAggregateInput_1 = require("../inputs/PartComputerMaxOrderByAggregateInput");
const PartComputerMinOrderByAggregateInput_1 = require("../inputs/PartComputerMinOrderByAggregateInput");
const PartComputerSumOrderByAggregateInput_1 = require("../inputs/PartComputerSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PartComputerOrderByWithAggregationInput = class PartComputerOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithAggregationInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithAggregationInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithAggregationInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithAggregationInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithAggregationInput.prototype, "maintenanceId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithAggregationInput.prototype, "name_part", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCountOrderByAggregateInput_1.PartComputerCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCountOrderByAggregateInput_1.PartComputerCountOrderByAggregateInput)
], PartComputerOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerAvgOrderByAggregateInput_1.PartComputerAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerAvgOrderByAggregateInput_1.PartComputerAvgOrderByAggregateInput)
], PartComputerOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerMaxOrderByAggregateInput_1.PartComputerMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerMaxOrderByAggregateInput_1.PartComputerMaxOrderByAggregateInput)
], PartComputerOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerMinOrderByAggregateInput_1.PartComputerMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerMinOrderByAggregateInput_1.PartComputerMinOrderByAggregateInput)
], PartComputerOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerSumOrderByAggregateInput_1.PartComputerSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerSumOrderByAggregateInput_1.PartComputerSumOrderByAggregateInput)
], PartComputerOrderByWithAggregationInput.prototype, "_sum", void 0);
PartComputerOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerOrderByWithAggregationInput", {
        isAbstract: true
    })
], PartComputerOrderByWithAggregationInput);
exports.PartComputerOrderByWithAggregationInput = PartComputerOrderByWithAggregationInput;
