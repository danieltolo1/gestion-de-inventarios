"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventarioMaxOrderByAggregateInput = class InventarioMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMaxOrderByAggregateInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMaxOrderByAggregateInput.prototype, "productoId", void 0);
InventarioMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioMaxOrderByAggregateInput", {
        isAbstract: true
    })
], InventarioMaxOrderByAggregateInput);
exports.InventarioMaxOrderByAggregateInput = InventarioMaxOrderByAggregateInput;
