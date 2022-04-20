"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerAvgOrderByAggregateInput_1 = require("../inputs/ComputerAvgOrderByAggregateInput");
const ComputerCountOrderByAggregateInput_1 = require("../inputs/ComputerCountOrderByAggregateInput");
const ComputerMaxOrderByAggregateInput_1 = require("../inputs/ComputerMaxOrderByAggregateInput");
const ComputerMinOrderByAggregateInput_1 = require("../inputs/ComputerMinOrderByAggregateInput");
const ComputerSumOrderByAggregateInput_1 = require("../inputs/ComputerSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ComputerOrderByWithAggregationInput = class ComputerOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "id_computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "buy_date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "memory", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "hard_disk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "processor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "optical_unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "softwarecomputerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithAggregationInput.prototype, "historial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCountOrderByAggregateInput_1.ComputerCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCountOrderByAggregateInput_1.ComputerCountOrderByAggregateInput)
], ComputerOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerAvgOrderByAggregateInput_1.ComputerAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerAvgOrderByAggregateInput_1.ComputerAvgOrderByAggregateInput)
], ComputerOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerMaxOrderByAggregateInput_1.ComputerMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerMaxOrderByAggregateInput_1.ComputerMaxOrderByAggregateInput)
], ComputerOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerMinOrderByAggregateInput_1.ComputerMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerMinOrderByAggregateInput_1.ComputerMinOrderByAggregateInput)
], ComputerOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerSumOrderByAggregateInput_1.ComputerSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerSumOrderByAggregateInput_1.ComputerSumOrderByAggregateInput)
], ComputerOrderByWithAggregationInput.prototype, "_sum", void 0);
ComputerOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerOrderByWithAggregationInput", {
        isAbstract: true
    })
], ComputerOrderByWithAggregationInput);
exports.ComputerOrderByWithAggregationInput = ComputerOrderByWithAggregationInput;
