"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MovimientoInventarioAvgOrderByAggregateInput = class MovimientoInventarioAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioAvgOrderByAggregateInput.prototype, "cantidad", void 0);
MovimientoInventarioAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioAvgOrderByAggregateInput", {
        isAbstract: true
    })
], MovimientoInventarioAvgOrderByAggregateInput);
exports.MovimientoInventarioAvgOrderByAggregateInput = MovimientoInventarioAvgOrderByAggregateInput;
