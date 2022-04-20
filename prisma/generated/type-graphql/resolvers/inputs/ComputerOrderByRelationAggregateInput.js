"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ComputerOrderByRelationAggregateInput = class ComputerOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByRelationAggregateInput.prototype, "_count", void 0);
ComputerOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ComputerOrderByRelationAggregateInput);
exports.ComputerOrderByRelationAggregateInput = ComputerOrderByRelationAggregateInput;
