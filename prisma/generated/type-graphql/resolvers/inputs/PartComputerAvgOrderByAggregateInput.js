"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PartComputerAvgOrderByAggregateInput = class PartComputerAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerAvgOrderByAggregateInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerAvgOrderByAggregateInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerAvgOrderByAggregateInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerAvgOrderByAggregateInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerAvgOrderByAggregateInput.prototype, "maintenanceId", void 0);
PartComputerAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PartComputerAvgOrderByAggregateInput);
exports.PartComputerAvgOrderByAggregateInput = PartComputerAvgOrderByAggregateInput;
