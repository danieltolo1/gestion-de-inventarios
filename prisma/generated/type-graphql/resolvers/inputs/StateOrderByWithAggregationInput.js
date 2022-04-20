"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateAvgOrderByAggregateInput_1 = require("../inputs/StateAvgOrderByAggregateInput");
const StateCountOrderByAggregateInput_1 = require("../inputs/StateCountOrderByAggregateInput");
const StateMaxOrderByAggregateInput_1 = require("../inputs/StateMaxOrderByAggregateInput");
const StateMinOrderByAggregateInput_1 = require("../inputs/StateMinOrderByAggregateInput");
const StateSumOrderByAggregateInput_1 = require("../inputs/StateSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StateOrderByWithAggregationInput = class StateOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateOrderByWithAggregationInput.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateOrderByWithAggregationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCountOrderByAggregateInput_1.StateCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCountOrderByAggregateInput_1.StateCountOrderByAggregateInput)
], StateOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateAvgOrderByAggregateInput_1.StateAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateAvgOrderByAggregateInput_1.StateAvgOrderByAggregateInput)
], StateOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateMaxOrderByAggregateInput_1.StateMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateMaxOrderByAggregateInput_1.StateMaxOrderByAggregateInput)
], StateOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateMinOrderByAggregateInput_1.StateMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateMinOrderByAggregateInput_1.StateMinOrderByAggregateInput)
], StateOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateSumOrderByAggregateInput_1.StateSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateSumOrderByAggregateInput_1.StateSumOrderByAggregateInput)
], StateOrderByWithAggregationInput.prototype, "_sum", void 0);
StateOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateOrderByWithAggregationInput", {
        isAbstract: true
    })
], StateOrderByWithAggregationInput);
exports.StateOrderByWithAggregationInput = StateOrderByWithAggregationInput;
