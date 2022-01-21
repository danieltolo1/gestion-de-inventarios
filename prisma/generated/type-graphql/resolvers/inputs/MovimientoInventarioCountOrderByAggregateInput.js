"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MovimientoInventarioCountOrderByAggregateInput = class MovimientoInventarioCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCountOrderByAggregateInput.prototype, "inventarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCountOrderByAggregateInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCountOrderByAggregateInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCountOrderByAggregateInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioCountOrderByAggregateInput.prototype, "usuarioId", void 0);
MovimientoInventarioCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCountOrderByAggregateInput", {
        isAbstract: true
    })
], MovimientoInventarioCountOrderByAggregateInput);
exports.MovimientoInventarioCountOrderByAggregateInput = MovimientoInventarioCountOrderByAggregateInput;
