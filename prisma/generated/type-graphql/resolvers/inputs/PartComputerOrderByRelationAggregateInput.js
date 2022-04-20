"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PartComputerOrderByRelationAggregateInput = class PartComputerOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByRelationAggregateInput.prototype, "_count", void 0);
PartComputerOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerOrderByRelationAggregateInput", {
        isAbstract: true
    })
], PartComputerOrderByRelationAggregateInput);
exports.PartComputerOrderByRelationAggregateInput = PartComputerOrderByRelationAggregateInput;
