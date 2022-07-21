"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ComputerAvgOrderByAggregateInput = class ComputerAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerAvgOrderByAggregateInput.prototype, "id_computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerAvgOrderByAggregateInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerAvgOrderByAggregateInput.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerAvgOrderByAggregateInput.prototype, "softwarecomputerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerAvgOrderByAggregateInput.prototype, "locationId", void 0);
ComputerAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ComputerAvgOrderByAggregateInput);
exports.ComputerAvgOrderByAggregateInput = ComputerAvgOrderByAggregateInput;
