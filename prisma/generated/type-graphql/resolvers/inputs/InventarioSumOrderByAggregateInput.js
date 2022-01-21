"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventarioSumOrderByAggregateInput = class InventarioSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioSumOrderByAggregateInput.prototype, "cantidad", void 0);
InventarioSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioSumOrderByAggregateInput", {
        isAbstract: true
    })
], InventarioSumOrderByAggregateInput);
exports.InventarioSumOrderByAggregateInput = InventarioSumOrderByAggregateInput;
