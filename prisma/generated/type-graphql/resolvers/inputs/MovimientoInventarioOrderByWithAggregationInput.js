"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioAvgOrderByAggregateInput_1 = require("../inputs/MovimientoInventarioAvgOrderByAggregateInput");
const MovimientoInventarioCountOrderByAggregateInput_1 = require("../inputs/MovimientoInventarioCountOrderByAggregateInput");
const MovimientoInventarioMaxOrderByAggregateInput_1 = require("../inputs/MovimientoInventarioMaxOrderByAggregateInput");
const MovimientoInventarioMinOrderByAggregateInput_1 = require("../inputs/MovimientoInventarioMinOrderByAggregateInput");
const MovimientoInventarioSumOrderByAggregateInput_1 = require("../inputs/MovimientoInventarioSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MovimientoInventarioOrderByWithAggregationInput = class MovimientoInventarioOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "inventarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "usuarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCountOrderByAggregateInput_1.MovimientoInventarioCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCountOrderByAggregateInput_1.MovimientoInventarioCountOrderByAggregateInput)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioAvgOrderByAggregateInput_1.MovimientoInventarioAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioAvgOrderByAggregateInput_1.MovimientoInventarioAvgOrderByAggregateInput)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioMaxOrderByAggregateInput_1.MovimientoInventarioMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioMaxOrderByAggregateInput_1.MovimientoInventarioMaxOrderByAggregateInput)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioMinOrderByAggregateInput_1.MovimientoInventarioMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioMinOrderByAggregateInput_1.MovimientoInventarioMinOrderByAggregateInput)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioSumOrderByAggregateInput_1.MovimientoInventarioSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioSumOrderByAggregateInput_1.MovimientoInventarioSumOrderByAggregateInput)
], MovimientoInventarioOrderByWithAggregationInput.prototype, "_sum", void 0);
MovimientoInventarioOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioOrderByWithAggregationInput", {
        isAbstract: true
    })
], MovimientoInventarioOrderByWithAggregationInput);
exports.MovimientoInventarioOrderByWithAggregationInput = MovimientoInventarioOrderByWithAggregationInput;
