"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MovimientoInventarioOrderByRelationAggregateInput = class MovimientoInventarioOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByRelationAggregateInput.prototype, "_count", void 0);
MovimientoInventarioOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioOrderByRelationAggregateInput", {
        isAbstract: true
    })
], MovimientoInventarioOrderByRelationAggregateInput);
exports.MovimientoInventarioOrderByRelationAggregateInput = MovimientoInventarioOrderByRelationAggregateInput;
