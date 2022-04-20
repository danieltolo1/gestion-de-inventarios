"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StateAvgOrderByAggregateInput = class StateAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateAvgOrderByAggregateInput.prototype, "id_state", void 0);
StateAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateAvgOrderByAggregateInput", {
        isAbstract: true
    })
], StateAvgOrderByAggregateInput);
exports.StateAvgOrderByAggregateInput = StateAvgOrderByAggregateInput;
