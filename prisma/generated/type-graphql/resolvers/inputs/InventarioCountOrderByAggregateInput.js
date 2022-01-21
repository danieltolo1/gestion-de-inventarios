"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventarioCountOrderByAggregateInput = class InventarioCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioCountOrderByAggregateInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioCountOrderByAggregateInput.prototype, "productoId", void 0);
InventarioCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioCountOrderByAggregateInput", {
        isAbstract: true
    })
], InventarioCountOrderByAggregateInput);
exports.InventarioCountOrderByAggregateInput = InventarioCountOrderByAggregateInput;
