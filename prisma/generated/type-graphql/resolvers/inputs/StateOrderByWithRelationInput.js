"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerOrderByRelationAggregateInput_1 = require("../inputs/ComputerOrderByRelationAggregateInput");
const ProductOrderByRelationAggregateInput_1 = require("../inputs/ProductOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StateOrderByWithRelationInput = class StateOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateOrderByWithRelationInput.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateOrderByWithRelationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput)
], StateOrderByWithRelationInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerOrderByRelationAggregateInput_1.ComputerOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerOrderByRelationAggregateInput_1.ComputerOrderByRelationAggregateInput)
], StateOrderByWithRelationInput.prototype, "computer", void 0);
StateOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateOrderByWithRelationInput", {
        isAbstract: true
    })
], StateOrderByWithRelationInput);
exports.StateOrderByWithRelationInput = StateOrderByWithRelationInput;
