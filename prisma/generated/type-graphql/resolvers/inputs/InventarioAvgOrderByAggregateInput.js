"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventarioAvgOrderByAggregateInput = class InventarioAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioAvgOrderByAggregateInput.prototype, "cantidad", void 0);
InventarioAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioAvgOrderByAggregateInput", {
        isAbstract: true
    })
], InventarioAvgOrderByAggregateInput);
exports.InventarioAvgOrderByAggregateInput = InventarioAvgOrderByAggregateInput;
