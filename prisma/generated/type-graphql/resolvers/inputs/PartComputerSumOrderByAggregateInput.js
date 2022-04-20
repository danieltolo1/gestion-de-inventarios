"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PartComputerSumOrderByAggregateInput = class PartComputerSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerSumOrderByAggregateInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerSumOrderByAggregateInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerSumOrderByAggregateInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerSumOrderByAggregateInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerSumOrderByAggregateInput.prototype, "maintenanceId", void 0);
PartComputerSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerSumOrderByAggregateInput", {
        isAbstract: true
    })
], PartComputerSumOrderByAggregateInput);
exports.PartComputerSumOrderByAggregateInput = PartComputerSumOrderByAggregateInput;
