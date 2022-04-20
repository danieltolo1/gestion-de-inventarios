"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ComputerSumOrderByAggregateInput = class ComputerSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerSumOrderByAggregateInput.prototype, "id_computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerSumOrderByAggregateInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerSumOrderByAggregateInput.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerSumOrderByAggregateInput.prototype, "softwarecomputerId", void 0);
ComputerSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerSumOrderByAggregateInput", {
        isAbstract: true
    })
], ComputerSumOrderByAggregateInput);
exports.ComputerSumOrderByAggregateInput = ComputerSumOrderByAggregateInput;
