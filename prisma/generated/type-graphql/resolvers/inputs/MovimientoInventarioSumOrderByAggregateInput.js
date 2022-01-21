"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MovimientoInventarioSumOrderByAggregateInput = class MovimientoInventarioSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioSumOrderByAggregateInput.prototype, "cantidad", void 0);
MovimientoInventarioSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioSumOrderByAggregateInput", {
        isAbstract: true
    })
], MovimientoInventarioSumOrderByAggregateInput);
exports.MovimientoInventarioSumOrderByAggregateInput = MovimientoInventarioSumOrderByAggregateInput;
