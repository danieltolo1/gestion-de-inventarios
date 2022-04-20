"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StateMaxOrderByAggregateInput = class StateMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateMaxOrderByAggregateInput.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateMaxOrderByAggregateInput.prototype, "description", void 0);
StateMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateMaxOrderByAggregateInput", {
        isAbstract: true
    })
], StateMaxOrderByAggregateInput);
exports.StateMaxOrderByAggregateInput = StateMaxOrderByAggregateInput;
