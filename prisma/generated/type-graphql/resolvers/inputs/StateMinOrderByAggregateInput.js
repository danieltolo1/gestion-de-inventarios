"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StateMinOrderByAggregateInput = class StateMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateMinOrderByAggregateInput.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateMinOrderByAggregateInput.prototype, "description", void 0);
StateMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateMinOrderByAggregateInput", {
        isAbstract: true
    })
], StateMinOrderByAggregateInput);
exports.StateMinOrderByAggregateInput = StateMinOrderByAggregateInput;
