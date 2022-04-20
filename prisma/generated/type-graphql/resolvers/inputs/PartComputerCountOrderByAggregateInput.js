"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PartComputerCountOrderByAggregateInput = class PartComputerCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCountOrderByAggregateInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCountOrderByAggregateInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCountOrderByAggregateInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCountOrderByAggregateInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCountOrderByAggregateInput.prototype, "maintenanceId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCountOrderByAggregateInput.prototype, "name_part", void 0);
PartComputerCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCountOrderByAggregateInput", {
        isAbstract: true
    })
], PartComputerCountOrderByAggregateInput);
exports.PartComputerCountOrderByAggregateInput = PartComputerCountOrderByAggregateInput;
